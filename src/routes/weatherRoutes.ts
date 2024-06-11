import express from "express";
import { getWeatherController } from "../controllers/weatherController";

const router = express.Router();

router.post("/clima", getWeatherController);

export default router;