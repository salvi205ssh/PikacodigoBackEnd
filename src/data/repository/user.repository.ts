import { connect } from "../../database/user.db.config";
import { User as UserPojo } from "../models/user.model";
import { User as UserDto } from "../models/user.model";
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
      console.log("En el repository: " + newUser);
      newUser.user_id = uuid();
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
  async getUserById(id: string): Promise<UserPojo> | undefined {
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

  async getLogin(email: string, password: string): Promise<UserPojo> {
    let user: UserPojo = {} as UserPojo;
    try {
      /*   user = await this._database.sequelize.query(
        "SELECT * FROM public.cryptobros where username=? and password=?", {
          replacements: [username, password],
          type: QueryTypes.SELECT
        }
      ); */
      console.log("getLogin desde repository");

      console.log("En el repository: " + user);

      return await this._userRepository.findOne({
        where: { email: email, password: password },
      });
    } catch (error) {
      console.error("Error getLogin desde repository");
      console.error(error);
      throw error;
    }
    return user;
  }

  async updateUser(newUser: UserPojo): Promise<UserPojo> {
    try {
      //console.log("Update en el repository: " + newUser);
      await this._userRepository.update(
        {
          username: newUser.username,
          lastname: newUser.lastname,
          password: newUser.password,
          birthdate: newUser.birthdate,
          email: newUser.email,
          phone: newUser.phone,
          login: newUser.login,
          rol: newUser.rol,
          picture: newUser.picture,
          active: newUser.active,
        },
        {
          where: {
            user_id: newUser.user_id,
          },
        }
      );
      console.log("updateUser desde repository: " + newUser);

      return newUser;
    } catch (error) {
      console.error("Error updateUser desde repository");
      console.error(error);
      return null;
    }
  }
}
