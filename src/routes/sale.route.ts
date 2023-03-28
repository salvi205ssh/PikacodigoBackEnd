import express from 'express';
import { saleController } from '../controllers/sale.controller';

const router = express.Router();

router.post('/add', saleController.addNewSale);

export default router;