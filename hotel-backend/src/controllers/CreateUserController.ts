import { Request, Response } from 'express';

import { CreateUserService } from '../services/CreateUserService';


class CreateUserController{
    async handle(request: Request, response: Response){
        const { user } = request.body;

        const service = new CreateUserService();
        const result =  await service.execute(user);

        return response.json(result)
    }
}

export { CreateUserController }