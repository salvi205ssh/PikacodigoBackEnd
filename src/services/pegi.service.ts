import { PegiPojo } from "../data/models/pegi.model"
import { PegiRepository } from "../data/repository/pegi.repository"
import { PegiDto } from "../types"


export class PegiService {
    _pegiRepository: PegiRepository

    constructor() {
        this._pegiRepository = new PegiRepository()
    }

 
    async getAllPegis(): Promise<PegiDto[]> {
        const pegisPromise = await this._pegiRepository
            .getAllPegis()
            .then((pegisAsPojo) => {
                let pegisAsDto: PegiDto[] = []
                pegisAsPojo.forEach((pegiAsPojo) => {
                    let pegiAsDto = this.parsePojoIntoDto(pegiAsPojo)
                    pegisAsDto.push(pegiAsDto)
                })
                return pegisAsDto
            })
            .catch((error) => {
                console.error(error)
                throw error
            })
        return pegisPromise
    }

    parsePojoIntoDto(pegiPojo: PegiPojo): PegiDto {
        const pegiDto: PegiDto = {
            pegi_id: pegiPojo.dataValues.pegi_id,
            name: pegiPojo.dataValues.name
        }
        return pegiDto
    }


}