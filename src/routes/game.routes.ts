import express from 'express'
import { gameController } from '../controllers/game.controller'

const router = express.Router()

router.post("/add", gameController.addGame);
router.get("/all", gameController.getAllGame);
router.get("/get/:id", gameController.getGameById);
router.get("/get/:id", gameController.getGameById);
router.patch("/update", gameController.updateGame);


export default router
module.exports = router