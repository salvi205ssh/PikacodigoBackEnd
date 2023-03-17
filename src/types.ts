export class UserDto {
  userId: number;
  userName: string;
  userLastName: string;
  //password: string;
  userBirthdate:Date;
  email: string;
  userPhone:string;
  userLogin:string;
  userRol:string;
  userAddress:string;
  active?: string;
}

export type NewUserDto = Omit<UserDto, "userId">;
