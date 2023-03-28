import express from 'express'
import { gameController } from '../controllers/game.controller' 

const router = express.Router()


router.post("/add", gameController.addGame);
router.get("/all", gameController.getAllGame);
router.get("/get/:id", gameController.getGameById);




export default router
module.exports = router