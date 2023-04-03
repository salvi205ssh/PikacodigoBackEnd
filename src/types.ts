export class UserDto {
  user_id: string;
  username: string;
  fullname: string;
  password: string;
  birthdate: Date;
  email: string;
  phone: string;
  login: string;
  rol: string;
  picture: string;
  status: string;
}

export class GameDto {
  game_id: string
  name: string
  distributor: string
  stars: number
  description: string
  pegi_id: string
  category_id: string
  mode_id: string
  price: number
  stock: number
};

export class Game_pictureDto {
  game_picture_id: string
  picture: string
  game_id: string
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

export class MessageDto {
  message_id: string;
  content: string;
  date: Date;
  user_from_id: string;
  user_to_id: string;
  read: number;
}

export class PegiDto {
  pegi_id: string;
  name:string;
}