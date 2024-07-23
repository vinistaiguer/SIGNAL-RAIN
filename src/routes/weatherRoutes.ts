import express from "express";
import { getWeatherController } from "../controllers/weatherController";
import { weatherControllerFiveDays } from "../controllers/weatherControllerFiveDays";

const router = express.Router();

router.post("/weather", getWeatherController);
router.post("/weather-five-days", weatherControllerFiveDays);

export default router;