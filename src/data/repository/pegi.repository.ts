import { connect } from "../config/db.config"
import { PegiPojo } from "../models/pegi.model";

export class PegiRepository {
    private _db: any = {};
    private _pegiRepository: any;

    constructor() {
        this._db = connect();
        this._pegiRepository = this._db.sequelize.getRepository(PegiPojo);
    }


    async getAllPegis(): Promise<PegiPojo[]> {
        try {
            return await this._pegiRepository
                .findAll()
        } catch (error) {
            console.error(error)
            return []
        }
    }
}