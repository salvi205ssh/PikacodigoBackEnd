export class UserDto {
  userId: number;
  username: string;
  userlastname: string;
  //password: string;
  userbirthdate:Date;
  useremail: string;
  userphone:string;
  userlogin:string;
  userrol:string;
  useraddress:string;
  active?: string;
}

export type NewUserDto = Omit<UserDto, "userId">;
