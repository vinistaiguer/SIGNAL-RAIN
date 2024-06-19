import express from "express";
import { getWeatherController } from "../controllers/weatherController";

const router = express.Router();

router.post("/weather", getWeatherController);

export default router;