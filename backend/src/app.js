import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";

import healthRoutes from "./routes/health.routes.js";

const app = express();

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/health", healthRoutes);

app.use(notFound);

app.use(errorHandler);

export default app;