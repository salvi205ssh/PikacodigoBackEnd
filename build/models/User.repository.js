"use strict";
/* import { connect } from "../database/database-config";
import { user as DBUser } from "./userModel";

export class UserRepository {
    private db: any = {};
    private userRepository: any;

    constructor() {
        this.db = connect();
        this.userRepository = this.db.sequelize.getRepository(DBUser);
    }

    async getAllUser(): Promise<DBUser[]> {
        try {
            const users = await this.userRepository.findAll();
            console.log('users:::', users);
            return users;
        } catch (error) {
            console.error('ERROR');
            console.error(error);
            return [];
        }
    }
} */ 
