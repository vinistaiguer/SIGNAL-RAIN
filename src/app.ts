import express from "express";
import swaggerUi from "swagger-ui-express";

import { cronWeatherMonitorJob } from "./jobs/cronWeatherMonitorJob";
import weatherRoutes from "./routes/weatherRoutes";
import swaggerDocs from "./swagger.json";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use("/api", weatherRoutes);

cronWeatherMonitorJob();

export default app;