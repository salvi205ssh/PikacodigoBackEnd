import { NewUserDto, UserDto } from "../types";

export class UserService {
  constructor() {}

  //recibe un DTO y devuelve una promesa<userDTO>
  async addUser(_user: NewUserDto): Promise<number> {
    // TODO : LLamar al repositorio
    return 0;
  }

  async getAllUsers(): Promise<UserDto[]> {
    // TODO : LLamar al repositorio
    return null;
  }

  async getUserById(_id: number): Promise<UserDto | undefined> {
    // TODO : LLamar al repositorio
    return undefined;
  }
}
