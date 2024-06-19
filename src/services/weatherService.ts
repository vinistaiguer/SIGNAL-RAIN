import { fetchWeatherData } from "../repositories/weatherRepository";

export const getWeather = async (cityName: string) => {
    return await fetchWeatherData(cityName);
};