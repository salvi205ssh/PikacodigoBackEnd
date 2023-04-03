import express from 'express'
import { pegiController } from '../controllers/pegi.controller';

const router = express.Router()

router.get("/all", pegiController.getAllPegis);

export default router
module.exports = router