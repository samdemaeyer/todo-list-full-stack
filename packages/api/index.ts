import type { Request, Response } from 'express';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from './swagger/output.json';
import { endpoints } from './swagger/endpoints';

dotenv.config();

export const app = express();
const port = process.env.PORT;
app.use(cors({ origin: '*' }), express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

endpoints();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
