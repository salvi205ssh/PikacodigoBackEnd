export class UserDto {
    userId: string;
    userNmae: string;
    password: string;
    email: string;
    active?: boolean;
  }
  
  export type NewUserDto = Omit<UserDto, "userId">;
  