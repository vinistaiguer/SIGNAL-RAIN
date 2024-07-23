import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";

import { createProxyMiddleware } from "http-proxy-middleware";
import { cronWeatherMonitorJob } from "./jobs/cronWeatherMonitorJob";
import weatherRoutes from "./routes/weatherRoutes";
import swaggerDocs from "./swagger.json";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api", weatherRoutes, createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true,
}),);

cronWeatherMonitorJob();

export default app;