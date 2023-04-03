import { PegiService } from "../services/pegi.service";
const pegiService: PegiService = new PegiService()

export const pegiController = {
  

    getAllPegis: (_req: any, res: any) => {
        pegiService
            .getAllPegis()
            .then((result) => {
                res.json(result)
            })
            .catch((excepcion) => {
                console.error(excepcion)
                res.sendStatus(500)
            })
    }

};