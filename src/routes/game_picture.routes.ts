import express from 'express'
import { game_pictureController } from '../controllers/game_picture.controller';

const router = express.Router()


router.post("/add", game_pictureController.addGame_picture);
router.get("/all", game_pictureController.getAllGame_picture);
router.get("/get/:id", game_pictureController.getGame_pictureById);




export default router
module.exports = router