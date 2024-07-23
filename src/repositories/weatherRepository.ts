import axios from "axios";
import { API_KEY, API_KEY_NEWS } from "../config/dotenv";

export const fetchWeatherData = async ( cityName: string ) => {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    )
    return response.data;
};

export const fetchNews = async () => {
    const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY_NEWS}`
    )
    console.log
    return response.data
}