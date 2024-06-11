import express from "express";
import weatherRoutes from "./routes/weatherRoutes";

const app = express();
app.use(express.json());
app.use("/api", weatherRoutes);

export default app;