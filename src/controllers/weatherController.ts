import { Request, Response } from "express";
import { getWeather } from "../services/weatherService";

export const getWeatherController = async (req: Request, res: Response) => {
    const cityName = req.body.cityName;
    console.log("cityName getWeatherController", cityName)
    if(!cityName) return res.status(400).json({ error: "O nome da cidade é obrigatório" })

    try {
        const weatherData = await getWeather(cityName);
        console.log("weatherData", weatherData)
        res.json(weatherData)
    } catch (error) {
        console.error("Erro ao obter informações sobre o clima:", error);
        res.status(500).json({ error: "Erro ao obter informações sobre o clima" });
    }

}