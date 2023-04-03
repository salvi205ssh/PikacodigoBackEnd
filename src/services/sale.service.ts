import { GameDto } from './../types';
import { GameService } from './game.service';
import { GameRespository } from './../data/repository/game.repository';
import { SaleDto } from "../types";
import { SalePojo } from "../data/models/sale.models";
import { SaleRepository } from "../data/repository/sale.repository";

export class SaleService {
    saleRepository: SaleRepository;
    gameRepository: GameRespository
    gameService: GameService;

    constructor() {
        this.saleRepository = new SaleRepository();
        this.gameRepository = new GameRespository();
        this.gameService = new GameService()
    }

    async addNewSale(newSale: SaleDto): Promise<string> {
        const saleAsPojo: SalePojo = this.parseDtoIntoPojo(newSale);

        const game: GameDto = await this.gameRepository.getGameById(newSale.game_id)
            .then(gameAsPojo => this.gameService.parsePojoIntoDto(gameAsPojo));

        return await this.saleRepository.addNewSale(saleAsPojo, game)
            .then(newSaleId => newSaleId)
            .catch(exception => {
                console.error(exception);
                throw exception;
            })
    }

    async getGamesByUserId(idUser: string): Promise<any> {
        return await this.saleRepository.getGamesByUserId(idUser)
            .then(games => games)
            .catch(exception => {
                console.error(exception);
                throw exception;
            })
    }

    parsePojoIntoDto(salePojo: SalePojo): SaleDto {
        const reviewDto: SaleDto = {
            sale_id: salePojo.dataValues.sale_id,
            date: salePojo.dataValues.date,
            amount: salePojo.dataValues.amount,
            game_id: salePojo.dataValues.game_id,
            user_id: salePojo.dataValues.user_id
        }

        return reviewDto;
    }

    parseDtoIntoPojo(saleDto: SaleDto): SalePojo {
        return saleDto as unknown as SalePojo;
    }
}