import type { Request, Response } from "express";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerConfig from "./swagger/output.json";
import { todos } from "./routes/todos";
import { setup } from "./database/fakeDBSetup";

dotenv.config();

export const app = express();
const port = process.env.PORT;
app.use(cors({ origin: "*" }), express.json());
app.use(express.json({ limit: "1mb" }));

setup(() => {
  app.use("/todos", todos);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
});
