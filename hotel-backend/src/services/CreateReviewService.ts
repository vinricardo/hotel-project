import { Review } from '../interfaces/review.interface';
import prismaClient from '../prisma';


class CreateReviewService{
    async execute(review:Review){
        var newReview = await prismaClient.review.create({
            data: {
                overview: review.overview,
                rating: review.rating,
                hotelId: review.hotelId,
                userId: review.userId
            }
        })

        return newReview;
    }
}

export {CreateReviewService}