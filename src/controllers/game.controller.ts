import { GameService } from "../services/game.service";
const gameService: GameService = new GameService()

export const gameController = {
    addGame: (req: any, res: any) => {
        try {
            const newGame = req.body
            gameService.addGame(newGame).then(result => {
                res.json(result)
            })
        } catch (excepcion) {
            console.error(excepcion)
            res.sendStatus(500)
        }
    },

    getAllGame: (_req: any, res: any) => {
        gameService
            .getAllGames()
            .then((result) => {
                res.json(result)
            })
            .catch((excepcion) => {
                console.error(excepcion)
                res.sendStatus(500)
            })
    },
    
    getGameById: (req: any, res: any) => {
        try {
            const gameId = req.params.id;
            gameService.getGameById(gameId).then((result) => {
                res.json(result);
            });
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },

    updateGame: (req: any, res: any) => {
        try {
          // Obtiene el nuevo usuario del cuerpo de la solicitud
          const newGame = req.body.game;
    
          console.log("updateGame Body: " + req.body.game);
          console.log("updateGame en el controller: " + newGame);
    
          gameService.updateGame(newGame).then((result) => {
            console.log("updateGame desde controller");
    
            // Envía una respuesta con el resultado de la operación
            res.json(result);
          });
        } catch (exception) {
          console.log("Error updateGame desde controller");
    
          console.log(exception);
          res.sendStatus(500);
        }
      },
};