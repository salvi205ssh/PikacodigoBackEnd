import { connect } from "./../../database/database-config";
import { User as UserPojo } from "../../data/models/userModel";
import { User as UserDto } from "../models/userModel";
import { v4 as uuid } from "uuid";

export class UserRepository {
  _database: any = {};
  _userRepository: any;

  // En el constructor inicializamos la conexión a la base de datos y obtenemos el repositorio de usuarios.
  constructor() {
    this._database = connect();
    this._userRepository = this._database.sequelize.getRepository(UserPojo);
  }

  // Este método añade un nuevo usuario a la base de datos y devuelve su id.
  async addUser(newUser: UserPojo): Promise<UserPojo> {
    try {
      console.log('En el repository: ' + newUser);
      newUser.user_id= uuid();
      newUser = await this._userRepository.create(newUser);
      console.log("addUser desde repository" + newUser.id);

      return newUser;
    } catch (error) {
      console.error("Error addUser desde repository");
      console.error(error);
      return null;
    }
  }

  // Funcionando
  async getAllUsers(): Promise<UserDto[]> {
    try {
      const users = await this._userRepository.findAll();
      console.log("Users::", users);
      console.log("getAllUsers desde repository");
      return users;
    } catch (error) {
      console.error("Se ha producido un error al recuperar usuarios");
      console.log("Error getAllUsers desde repository");

      console.error(error);
      return [];
    }
  }

  // Funcionando
  async getUserById(id: number): Promise<UserPojo> | undefined {
    try {
      console.log("getUserById desde repository");
      //await devuelve una promesa, no devuelve los datos en el momento
      return await this._userRepository.findByPk(id);
    } catch (error) {
      console.error("Error getUserById desde repository");
      console.error(error);
      return undefined;
    }
  }

  //editar

  //login
}
