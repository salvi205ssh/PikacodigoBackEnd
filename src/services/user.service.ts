import { UserPojo } from "../data/models/user.model";
import { UserRepository } from "../data/repository/user.repository";
import { UserDto } from "../types";

export class UserService {
  _userRepository: UserRepository;

  constructor() {
    this._userRepository = new UserRepository();
  }

  async addUser(user: UserDto): Promise<UserDto> {
    const userPjo: UserPojo = this.parseDtoIntoPojo(user);

    const userPromise = await this._userRepository
      .addUser(userPjo)
      .then((user) => {
        return user;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });

    return userPromise;
  }

  async getAllUsers(): Promise<UserDto[]> {
    const userPromise = await this._userRepository
      .getAllUsers()
      .then((result) => {
        let users: UserDto[] = [];
        result.forEach((userAsPojo) => {
          const userAsDto = this.parsePojoIntoDto(userAsPojo);
          users.push(userAsDto);
        });
        return users;
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
    return userPromise;
  }

  async getUserById(id: string): Promise<UserDto | undefined> {
    const userPromise = await this._userRepository
      .getUserById(id)
      .then((userAsPojo) => {
        console.log("getUserById desde service");

        if (!!userAsPojo) {
          return this.parsePojoIntoDto(userAsPojo);
        } else {
          return undefined;
        }
      })
      .catch((error) => {
        console.log("Error getUserById desde service");
        console.error(error);
        throw error;
      });

    return userPromise;
  }

  async getLogin(email: string, password: string): Promise<UserDto> {
    const usersPromise = await this._userRepository
      .getLogin(email, password)
      .then((result) => {
        console.log("getLogin desde service");

        /* let usersAsDto: UserDto = this.parsePojoIntoDto(result[0]);
        console.log(usersAsDto);

        return usersAsDto; */
        if (!result) {
          return undefined;
        }

        return this.parsePojoIntoDto(result);
      })
      .catch((error) => {
        console.error("Error getLogin desde service");
        console.error(error);
        throw error;
      });
    return usersPromise;
  }

  async updateUser(user: UserDto): Promise<UserDto> {
    console.log("En el service(DTO): " + user);
    const userPjo: UserPojo = this.parseDtoIntoPojo(user);
    console.log("En el service(POJO): " + userPjo);
    const userPromise = await this._userRepository
      .updateUser(userPjo)
      .then((user) => {
        console.log("updateUser desde service");

        return user;
      })
      .catch((error) => {
        console.log("Error updateUser desde service");

        console.error(error);
        throw error;
      });

    return userPromise;
  }

  async banearUser(user_id: string): Promise<UserDto> {
    const userPromise = await this._userRepository
      .banearUser(user_id)
      .then((user) => {
        console.log("banearUser desde service");

        return user;
      })
      .catch((error) => {
        console.log("Error banearUser desde service");

        console.error(error);
        throw error;
      });

    return userPromise;
  }

  async activeUser(user_id: string): Promise<UserDto> {
    const userPromise = await this._userRepository
      .activeUser(user_id)
      .then((user) => {
        console.log("activeUser desde service");

        return user;
      })
      .catch((error) => {
        console.log("Error activeUser desde service");

        console.error(error);
        throw error;
      });

    return userPromise;
  }

  parsePojoIntoDto(userPojo: UserPojo): UserDto {
    const userDto: UserDto = {
      user_id: userPojo.dataValues.user_id,
      username: userPojo.dataValues.username,
      lastname: userPojo.dataValues.lastname,
      password: userPojo.dataValues.password,
      birthdate: userPojo.dataValues.birthdate,
      email: userPojo.dataValues.email,
      phone: userPojo.dataValues.phone,
      login: userPojo.dataValues.login,
      rol: userPojo.dataValues.rol,
      picture: userPojo.dataValues.picture,
      active: userPojo.dataValues.active,
    };
    return userDto;
  }

  parseDtoIntoPojo(userDto: UserDto): UserPojo {
    return userDto as UserPojo;
  }
}
