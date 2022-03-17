import { Request, Response, Router } from 'express';
import path from 'path';

import { CreateHotelController } from './controllers/CreateHotelController';
import { CreateReviewController } from './controllers/CreateReviewController';
import { CreateUserController } from './controllers/CreateUserController';
import { GetHotelsController } from './controllers/GetHotelsController';

const router = Router();

router.get("/get-hotels", new GetHotelsController().handle);

router.post("/create-hotel", new CreateHotelController().handle);

router.post("/create-user", new CreateUserController().handle);

router.post("/create-review", new CreateReviewController().handle);

router.get("/files", (req: Request, res: Response) => {
  let { filePath } = req.query;
  return res.sendFile(path.join(__dirname, `${filePath}`));
});

export { router };
