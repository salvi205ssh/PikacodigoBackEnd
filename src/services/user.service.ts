import { User as UserPojo } from "../data/models/userModel";
import { UserRepository } from "../data/repository/user.repository";
import { NewUserDto, UserDto } from "../types";

export class UserService {
  _userRepository: UserRepository;
  constructor() {
    this._userRepository = new UserRepository();
  }

  //recibe un DTO y devuelve una promesa<userDTO>
  async addUser(user: NewUserDto): Promise<number> {
    const userPjo: UserPojo = this.parseDtoIntoPojo(user);
    const userPromise = await this._userRepository
      .addUser(userPjo)
      .then((userId) => {
        return userId;
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
        result.forEach((UserPojo) => {
          users.push(this.parsePojoIntoDto(UserPojo));
        });
        return users;
      })
      .catch((err) => {
        console.error("Error al recuperar usuarios");
        console.error(err);
        throw err;
      });
    return userPromise;
  }

  async getUserById(id: number): Promise<UserDto | undefined> {
    const userPromise = await this._userRepository
      .getUserById(id)
      .then((userAsPojo) => {
        if (!!userAsPojo) {
          return this.parsePojoIntoDto(userAsPojo)
        }else{
          return undefined;
        }

      }).catch((error) => {
        console.error("Error al recuperar usuarios");
        console.error(error);
        throw error;
      });

      return userPromise;
  }

  parsePojoIntoDto(userPojo: UserPojo): UserDto {
    const userDto: UserDto = {
      userId: userPojo.userId,
      username: userPojo.username,
      userlastname: userPojo.userlastname,
      //password: userPojo.;
      userbirthdate: userPojo.userbirthdate,
      useremail: userPojo.useremail,
      userphone: userPojo.userphone,
      userlogin: userPojo.userlogin,
      userrol: userPojo.userrol,
      useraddress: userPojo.useraddress,
      active: userPojo.active,
    };
    return userDto;
  }

  parseDtoIntoPojo(userDto: NewUserDto): UserPojo {
    let userPojo: UserPojo = new UserPojo();

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

    return userPojo;
  }
}
