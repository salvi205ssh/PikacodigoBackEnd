import { connect } from "./../../database/database-config";
import { User as UserPojo } from "../../data/models/userModel";
import { User as UserDto } from "../models/userModel";

export class UserRepository {
  _database: any = {};
  _userRepository: any;

  // En el constructor inicializamos la conexión a la base de datos y obtenemos el repositorio de usuarios.
  constructor() {
    this._database = connect();
    this._userRepository = this._database.sequelize.getRepository(UserPojo);
  }

  // Este método añade un nuevo usuario a la base de datos y devuelve su id.
  async addUser(newUser: UserPojo): Promise<number> {
    try {
      newUser = await this._userRepository.create(newUser);
      return newUser.id;
    } catch (error) {
      console.error("Se ha producido un error al insertar usuario");
      console.error(error);
      return -1;
    }
  }

  // Funcionando
  async getAllUsers(): Promise<UserDto[]> {
    try {
      const users = await this._userRepository.findAll();
      console.log("Users::", users);
      return users;
    } catch (error) {
      console.error("Se ha producido un error al recuperar usuarios");
      console.error(error);
      return [];
    }
  }

  // Funcionando
  async getUserById(id: number): Promise<UserPojo> | undefined {
    try {
      //await devuelve una promesa, no devuelve los datos en el momento
      return await this._userRepository.findByPk(id);
    } catch (error) {
      console.error("Se ha producido un error al recuperar usuario por id");
      console.error(error);
      return undefined;
    }
  }

  //editar


  //login
}
