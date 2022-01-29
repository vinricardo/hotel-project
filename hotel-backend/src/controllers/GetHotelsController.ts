import { Request, Response } from 'express';

import { GetHotelsService } from '../services/GetHotelsService';

class GetHotelsController{
    async handle(request: Request, response: Response){
        const service = new GetHotelsService();
        const result =  await service.execute();

        return response.json(result)
    }
}

export { GetHotelsController }