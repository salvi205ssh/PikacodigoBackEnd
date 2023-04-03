import express from 'express';
import { messageController } from '../controllers/message.controller';

const router = express.Router();

router.post('/add', messageController.addNewReview);
router.patch('/update/message/read', messageController.updateFieldRead);
router.get('/get/all/:id', messageController.getAllMessagesByUserId);
router.delete('/delete/message/:id', messageController.deleteMessage);

export default router;