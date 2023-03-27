import express from 'express';
import { reviewController } from '../controllers/review.controller';

const router = express.Router();

router.post('/add', reviewController.addNewReview);
router.delete('/delete/:id', reviewController.deleteReview);
router.get('/get/all/:id', reviewController.getAllReviewsByGameId);

export default router;