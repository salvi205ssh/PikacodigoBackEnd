import { ReviewService } from "../services/review.service";

const reviewService: ReviewService = new ReviewService();

export const reviewController = {
    addNewReview: (req: any, res: any) => {
        try {
            reviewService.addNewReview(req.body).then(newReviewId => res.json(newReviewId));
        } catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    },
    deleteReview: (req: any, res: any) => {
        try {
            reviewService.deleteReview(req.params.id).then(deletedReviewId => res.json(deletedReviewId));
        } catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    },
    getAllReviewsByGameId(req: any, res: any) {
        try {
            reviewService.getAllReviewsByGameId(req.params.id).then(reviews => res.json(reviews));
        } catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    }
}