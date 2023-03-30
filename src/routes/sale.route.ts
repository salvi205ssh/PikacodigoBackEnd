import express from 'express';
import { saleController } from '../controllers/sale.controller';

const router = express.Router();

router.post('/add', saleController.addNewSale);
router.get('/get/:id', saleController.getGamesByUserId);

export default router;