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


export class GameDto {
  game_id: string
  name: string
  distributor: string
  starts: number
  description: string
  pegi_id: string
  category_id: string
  mode_id: string
  price: number
  stock: number
}


export class ReviewDto {
  review_id: string;
  content: string;
  game_id: string;
  user_id: string;
}
