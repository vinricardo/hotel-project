import { Request, Response } from 'express';

import { CreateReviewService } from '../services/CreateReviewService';



class CreateReviewController{
    async handle(request: Request, response: Response){
        const { review } = request.body;

        const service = new CreateReviewService();
        const result =  await service.execute(review);

        return response.json(result)
    }
}

export { CreateReviewController }