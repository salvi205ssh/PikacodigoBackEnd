export class UserDto {
  user_id: string;
  username: string;
  lastname: string;
  password: string;
  birthdate:Date;
  email: string;
  phone:string;
  login:string;
  rol:string;
  picture:string;
  active: string;
}

//export type NewUserDto = Omit<UserDto, "userId">;
