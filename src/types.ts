export class UserDto {
  userId: number;
  userName: string;
  userLastName: string;
  //password: string;
  userBirthdate: Date;
  email: string;
  userPhone: string;
  userLogin: string;
  userRol: string;
  userAddress: string;
  active?: string;
}

export type NewUserDto = Omit<UserDto, "userId">;


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

export class SaleDto {
  sale_id: string;
  date: Date;
  amount: number;
  game_id: string;
  user_id: string;
}