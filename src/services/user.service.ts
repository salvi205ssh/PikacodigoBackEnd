import { User as UserPojo } from "../data/models/userModel";
import { UserRepository } from "../data/repository/user.repository";
import { UserDto } from "../types";

export class UserService {
  _userRepository: UserRepository;
  constructor() {
    this._userRepository = new UserRepository();
  }

  //recibe un DTO y devuelve una promesa<userDTO>
  async addUser(user: UserDto): Promise<UserDto> {
    console.log('En el service(DTO): ' + user);
    const userPjo: UserPojo = this.parseDtoIntoPojo(user);
    console.log('En el service(POJO): ' + userPjo);
    const userPromise = await this._userRepository
      .addUser(userPjo)
      .then((userId) => {
        console.log("addUser desde service");

        return userId;
      })
      .catch((error) => {
        console.log("Error addUser desde service");

        console.error(error);
        throw error;
      });

    return userPromise;
  }

  async getAllUsers(): Promise<UserDto[]> {
    const userPromise = await this._userRepository
      .getAllUsers()
      .then((result) => {
        console.log("getAllUsers desde service");

        let users: UserDto[] = [];
        result.forEach((UserPojo) => {
          users.push(this.parsePojoIntoDto(UserPojo));
        });
        return users;
      })
      .catch((err) => {
        console.error("Error getAllUsers desde service");
        console.error(err);
        throw err;
      });
    return userPromise;
  }

  async getUserById(id: number): Promise<UserDto | undefined> {
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

  parsePojoIntoDto(userPojo: UserPojo): UserDto {
    const userDto: UserDto = {
      user_id: userPojo.user_id,
      username: userPojo.username,
      lastname: userPojo.lastname,
      password: userPojo.password,
      birthdate: userPojo.birthdate,
      email: userPojo.email,
      phone: userPojo.phone,
      login: userPojo.login,
      rol: userPojo.rol,
      picture: userPojo.picture,
      active: userPojo.active
    };
    return userDto;
  }

  parseDtoIntoPojo(userDto: UserDto): UserPojo {
  /*   let userPojo: UserPojo = new UserPojo();

    userPojo.setDataValue("userId", null);
    userPojo.setDataValue("username", userDto.username);
    userPojo.setDataValue("userlastname", userDto.userlastname);
    userPojo.setDataValue("userbirthdate", userDto.userbirthdate);
    userPojo.setDataValue("useremail", userDto.useremail);
    userPojo.setDataValue("userphone", userDto.userphone);
    userPojo.setDataValue("userlogin", userDto.userlogin);
    userPojo.setDataValue("userrol", userDto.userrol);
    userPojo.setDataValue("useraddress", userDto.useraddress);
    userPojo.setDataValue("active", userDto.active ? "Active" : "Inactive");

    return userPojo; */
    return userDto as UserPojo;

  }
}
