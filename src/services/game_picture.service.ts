import { Game_pictureRespository } from "../data/repository/game_picture.repository";
import { Game_picturePojo } from "../data/models/game_picture.model";
import { Game_pictureDto } from "../types";

export class Game_pictureService {
    _game_pictureRepository: Game_pictureRespository

    constructor() {
        this._game_pictureRepository = new Game_pictureRespository()
    }

    parsePojoIntoDto(game_picturePojo: Game_picturePojo): Game_pictureDto {
        const game_pictureDto: Game_pictureDto = {
            game_picture_id: game_picturePojo.dataValues.game_picture_id,
            picture: game_picturePojo.dataValues.picture,
            game_id: game_picturePojo.dataValues.game_id,
        }
        return game_pictureDto
    }

    async addGame_picture(game_picture: Game_pictureDto): Promise<string> {
        const game_picturePojo: Game_picturePojo = this.parseDtoIntoPojo(game_picture)
        const game_picturePromise = await this._game_pictureRepository
            .addGame_picture(game_picturePojo)
            .then((game_pictureId) => {
                return game_pictureId
            })
            .catch(error => {
                console.error(error)
                throw error
            })
        return game_picturePromise
    };

    async getAllGames_picture(): Promise<Game_pictureDto[]> {
        const games_picturePromise = await this._game_pictureRepository
            .getAllGames_picture()
            .then((games_pictureAsPojo) => {
                let games_pictureAsDto: Game_pictureDto[] = []
                games_pictureAsPojo.forEach((game_pictureAsPojo) => {
                    let game_pictureAsDto = this.parsePojoIntoDto(game_pictureAsPojo)
                    games_pictureAsDto.push(game_pictureAsDto)
                })
                return games_pictureAsDto
            })
            .catch((error) => {
                console.error(error)
                throw error
            })
        return games_picturePromise
    }

    async getGame_pictureById(id: string): Promise<Game_pictureDto | undefined> {
        const game_picturePromise = await this._game_pictureRepository
            .getGame_pictureById(id)
            .then((game_pictureAsPojo) => {
                if (!!game_pictureAsPojo)
                    return this.parsePojoIntoDto(game_pictureAsPojo)
                else
                    return undefined
            })
            .catch((error) => {
                console.error(error)
                throw error
            })
        return game_picturePromise
    };

    async getAllGames_pictureByGameId(gameId: string): Promise<Game_pictureDto[]> {
        return await this._game_pictureRepository.getAllGames_pictureByGameId(gameId)
            .then(game_pictureAsPojo => game_pictureAsPojo.map(game_pictureAsPojo => this.parsePojoIntoDto(game_pictureAsPojo)))
            .catch(exception => {
                console.error(exception);
                throw exception;
            })
    }



    parseDtoIntoPojo(game_pictureDto: Game_pictureDto): Game_picturePojo {
        return game_pictureDto as unknown as Game_picturePojo

    }
}