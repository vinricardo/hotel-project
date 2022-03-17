import cors from 'cors';
import express from 'express';

import { router } from './router';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router)

app.listen(8080, () => console.log(`🖥️ Server is running on port 8080`));