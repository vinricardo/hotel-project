import { Request, Response } from 'express';

import { CreateHotelService } from '../services/CreateHotelService';

class CreateHotelController{
    async handle(request: Request, response: Response){
        const { hotel } = request.body;

        const service = new CreateHotelService();
        const result =  await service.execute(hotel);

        return response.json(result)
    }
}

export { CreateHotelController }