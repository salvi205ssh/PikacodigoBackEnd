import { GameDto } from './../../types';
import { GameRespository } from './game.repository';
import { connect } from './../../database/database-config';
import { SalePojo } from '../models/sale.models';
import { v4 as uuidv4 } from 'uuid';

export class SaleRepository {
    private _db: any = {};
    private _saleRepository: any;
    private _gameRepository: GameRespository;

    constructor() {
        this._db = connect();
        this._saleRepository = this._db.sequelize.getRepository(SalePojo);
        this._gameRepository = new GameRespository();
    }

    async addNewSale(newSale: SalePojo, game: GameDto): Promise<string> {
        try {
            if (newSale.amount > game.stock) {
                throw new Error('La cantidad supera al stock')
            }

            newSale.sale_id = uuidv4();
            newSale = await this._saleRepository.create(newSale);

            await this._gameRepository._gameRespository.update({ stock: game.stock - newSale.amount }, {
                where: {
                    game_id: newSale.game_id
                }
            });

            return newSale.sale_id;
        } catch (exception) {
            console.error(exception);
            return '';
        }
    }
}