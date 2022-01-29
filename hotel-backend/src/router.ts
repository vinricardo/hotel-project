import { Router } from 'express';

import { CreateHotelController } from './controllers/CreateHotelController';
import { CreateReviewController } from './controllers/CreateReviewController';
import { CreateUserController } from './controllers/CreateUserController';
import { GetHotelsController } from './controllers/GetHotelsController';

const router = Router();

router.get("/get-hotels", new GetHotelsController().handle)

router.post("/create-hotel", new CreateHotelController().handle)

router.post("/create-user", new CreateUserController().handle)

router.post("/create-review", new CreateReviewController().handle)

export { router }