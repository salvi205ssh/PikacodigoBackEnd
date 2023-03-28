import { connect } from '../../database/user.db.config';
import { ReviewPojo } from "../models/review.model";
import { v4 as uuidv4 } from 'uuid';

export class ReviewRepository {
    private _db: any = {};
    private _reviewRepository: any;

    constructor() {
        this._db = connect();
        this._reviewRepository = this._db.sequelize.getRepository(ReviewPojo);
    }

    async addNewReview(newReview: ReviewPojo): Promise<string> {
        try {
            newReview.review_id = uuidv4();
            newReview = await this._reviewRepository.create(newReview);
            return newReview.review_id;
        } catch (exception) {
            console.error(exception);
            return '';
        }
    }

    async deleteReview(idReviewToDelete: string): Promise<string> {
        try {
            return await this._reviewRepository.destroy({
                where: {
                    review_id: idReviewToDelete
                }
            })
        } catch (exception) {
            console.error(exception);
            return '';
        }
    }

    async getAllReviewsByGameId(gameId: string): Promise<ReviewPojo[]> {
        try {
            return await this._reviewRepository.findAll({
                where: {
                    game_id: gameId
                }
            })
        } catch (exception) {
            console.error(exception);
            return [];
        }
    }
}