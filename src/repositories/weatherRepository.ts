import axios from "axios";
import { API_KEY } from "../config/dotenv";

export const fetchWeatherData = async ( cityName: string ) => {
    console.log("cityName fetchWeatherData", cityName)
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    )
    return response.data;
};