// src/app.ts
import express, {
  json,
  urlencoded,
  Response as ExResponse,
  Request as ExRequest,
} from "express";
import swaggerUi from "swagger-ui-express";
import swagger from "./config/swagger.json";
import { RegisterRoutes } from "./config/routes";

export const app = express();

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(swaggerUi.generateHTML(swagger));
});

RegisterRoutes(app);
