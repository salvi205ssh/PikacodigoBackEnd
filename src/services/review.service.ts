import { ReviewDto } from './../types';
import { ReviewPojo } from "../data/models/review.model";
import { ReviewRepository } from "../data/repository/review.repository";

export class ReviewService {
    reviewRepository: ReviewRepository;

    constructor() {
        this.reviewRepository = new ReviewRepository();
    }

    async addNewReview(newReview: ReviewDto): Promise<string> {
        const reviewAsPojo: ReviewPojo = this.parseDtoIntoPojo(newReview);

        return await this.reviewRepository.addNewReview(reviewAsPojo)
            .then(newReviewId => newReviewId)
            .catch(exception => {
                console.error(exception);
                throw exception;
            })
    }

    async deleteReview(idReviewToDelete: string): Promise<string> {
        return await this.reviewRepository.deleteReview(idReviewToDelete)
            .then(idReviewDeleted => idReviewDeleted)
            .catch(exception => {
                console.error(exception);
                throw exception;
            })
    }

    async getAllReviewsByGameId(gameId: string): Promise<ReviewDto[]> {
        return await this.reviewRepository.getAllReviewsByGameId(gameId)
            .then(reviewsAsPojo => reviewsAsPojo.map(reviewAsPojo => this.parsePojoIntoDto(reviewAsPojo)))
            .catch(exception => {
                console.error(exception);
                throw exception;
            })
    }

    parsePojoIntoDto(reviewPojo: ReviewPojo): ReviewDto {
        const reviewDto: ReviewDto = {
            review_id: reviewPojo.dataValues.review_id,
            content: reviewPojo.dataValues.content,
            game_id: reviewPojo.dataValues.game_id,
            user_id: reviewPojo.dataValues.user_id
        }

        return reviewDto;
    }

    parseDtoIntoPojo(reviewDto: ReviewDto): ReviewPojo {
        return reviewDto as unknown as ReviewPojo;
    }
}