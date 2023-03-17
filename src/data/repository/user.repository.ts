import { connect } from "./../../database/database-config";
//import { NewUserDto } from "../../types";
import { User as DBUser } from "../models/userModel";

export class UserRepository {
  private db: any = {};
  private userRepository: any;

  constructor() {
    this.db = connect();
    this.userRepository = this.db.sequelize.getRepository(DBUser);
  }

  async getAllUsers(): Promise<DBUser[]> {
    try {
      const users = await this.userRepository.findAll();
      console.log("Users::", users);
      return users;
    } catch (error) {
      console.error("Se ha producido un error al recuperar usuarios");
      console.error(error);
      return [];
    }
  }
}
