import { User as DBUser } from "../data/models/userModel";
import { UserRepository } from "../data/repository/user.repository";
import { NewUserDto, UserDto } from "../types";


export class UserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  //recibe un DTO y devuelve una promesa<userDTO>
  async addUser(_user: NewUserDto): Promise<number> {
    // TODO : LLamar al repositorio
    return 0;
  }

  async getAllUsers(): Promise<UserDto[]> {
    const userPromise = await this.userRepository
      .getAllUsers()
      .then((result) => {
        let users: UserDto[] = [];
        result.forEach((DBUser) => {
          users.push(this.mapUserPojoToDto(DBUser));
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

  async getUserById(_id: number): Promise<UserDto | undefined> {
    // TODO : LLamar al repositorio
    return undefined;
  }

  mapUserPojoToDto(userPojo: DBUser): UserDto {
    const userDto: UserDto = {
      userId: userPojo.userId,
      userName: userPojo.userName,
      userLastName: userPojo.userLastName,
      //password: userPojo.;
      userBirthdate: userPojo.userBirthdate,
      email: userPojo.userEmail,
      userPhone: userPojo.userPhone,
      userLogin: userPojo.userLogin,
      userRol: userPojo.userRol,
      userAddress: userPojo.userAddress,
      active: userPojo.active,
    };
    return userDto;
  }
}
