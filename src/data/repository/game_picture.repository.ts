import { Game_picturePojo } from "../models/game_picture.model";
import { connect } from "../config/db.config";
import { v4 as uuidv4 } from 'uuid';

export class Game_pictureRespository {
    _database: any = {}
    _game_pictureRespository: any

    constructor() {
        this._database = connect()
        this._game_pictureRespository = this._database.sequelize.getRepository(Game_picturePojo)
    }

    async getAllGames_picture(): Promise<Game_picturePojo[]> {
        try {
            return await this._game_pictureRespository/*  */
                .findAll()
        } catch (error) {
            console.error(error)
            return []
        }
    }

    async getGame_pictureById(id: string): Promise<Game_picturePojo | undefined> {
        try {
            return await this._game_pictureRespository.findByPk(id)
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    async addGame_picture(newGame_picture: Game_picturePojo): Promise<string> {
        try {
            newGame_picture.game_picture_id = uuidv4();
            newGame_picture = await this._game_pictureRespository.create(newGame_picture)
            return newGame_picture.game_picture_id
        } catch (error) {
            console.error(error)
            return ''
        }
    }
}