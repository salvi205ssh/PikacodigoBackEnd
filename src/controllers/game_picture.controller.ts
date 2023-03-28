import { Game_pictureService } from "../services/game_picture.service";
const game_pictureService: Game_pictureService = new Game_pictureService()

export const game_pictureController = {

    addGame_picture: (req: any, res: any) => {
        try {
            const newGame_picture = req.body
            game_pictureService.addGame_picture(newGame_picture).then(result => {
                res.json(result)
            })
        } catch (excepcion) {
            console.error(excepcion)
            res.sendStatus(500)
        }
    },



    getAllGame_picture: (_req: any, res: any) => {
        game_pictureService
            .getAllGames_picture()
            .then((result) => {
                res.json(result)
            })
            .catch((excepcion) => {
                console.error(excepcion)
                res.sendStatus(500)
            })
    },

    getGame_pictureById: (req: any, res: any) => {
        try {
            const game_pictureId = req.params.id;
            game_pictureService.getGame_pictureById(game_pictureId).then((result) => {
                res.json(result);
            });
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },






};