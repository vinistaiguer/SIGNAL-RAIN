import { fetchWeatherData } from "../repositories/weatherRepository";

export const getWeather = async (cityName: string) => {
    console.log("cityName getWeather", cityName)
    return await fetchWeatherData(cityName);
};