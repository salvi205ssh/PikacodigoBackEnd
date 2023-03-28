import { GameRespository } from "../data/repository/game.repository";
import { GamePojo } from "../data/models/game.model";
import { GameDto } from "../types";


export class GameService {
    _gameRepository: GameRespository

    constructor() {
        this._gameRepository = new GameRespository()
    }

    parsePojoIntoDto(gamePojo: GamePojo): GameDto {
        const gameDto: GameDto = {
            game_id: gamePojo.dataValues.game_id,
            name: gamePojo.dataValues.name,
            distributor: gamePojo.dataValues.distributor,
            starts: gamePojo.dataValues.starts,
            description: gamePojo.dataValues.description,
            pegi_id: gamePojo.dataValues.pegi_id,
            category_id: gamePojo.dataValues.category_id,
            mode_id: gamePojo.dataValues.mode_id,
            price: gamePojo.dataValues.price,
            stock: gamePojo.dataValues.stock,
        }
        return gameDto
    }



    async addGame(game: GameDto): Promise<string> {
        const gamePojo: GamePojo = this.parseDtoIntoPojo(game)
        const gamePromise = await this._gameRepository
            .addGame(gamePojo)
            .then((gameId) => {
                return gameId
            })
            .catch(error => {
                console.error(error)
                throw error
            })
        return gamePromise
    };


    async getAllGames(): Promise<GameDto[]> {
        const gamesPromise = await this._gameRepository
            .getAllGames()
            .then((gamesAsPojo) => {
                let gamesAsDto: GameDto[] = []
                gamesAsPojo.forEach((gameAsPojo) => {
                    let gameAsDto = this.parsePojoIntoDto(gameAsPojo)
                    gamesAsDto.push(gameAsDto)
                })
                return gamesAsDto
            })
            .catch((error) => {
                console.error(error)
                throw error
            })
        return gamesPromise
    }

    async getGameById(id: string): Promise<GameDto | undefined> {
        const gamePromise = await this._gameRepository
            .getGameById(id)
            .then((gameAsPojo) => {
                if (!!gameAsPojo)
                    return this.parsePojoIntoDto(gameAsPojo)
                else
                    return undefined
            })
            .catch((error) => {
                console.error(error)
                throw error
            })
        return gamePromise
    };

    parseDtoIntoPojo(gameDto: GameDto): GamePojo {
        return gameDto as unknown as GamePojo

    }

}