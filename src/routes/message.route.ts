import express from 'express';
import { messageController } from '../controllers/message.controller';

const router = express.Router();

router.post('/add', messageController.addNewReview);
router.patch('/update/message/read', messageController.updateFieldRead);

export default router;