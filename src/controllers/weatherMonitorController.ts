import { checkForAlerts } from "../services/checkForAlerts";
import { sendAlert } from "../services/sendAlert";
import { getWeather } from "../services/weatherService";

interface Alert {
    cityName: string;
    alertMessage: string;
}

export const weatherMonitorController = async () => {
    const allCityNames = ["Rio Branco", "Maceió"];
    console.log("allCityNames getWeatherController", allCityNames);

    try {
        const alerts: Alert[] = [];

        for (const cityName of allCityNames) {
            try {
                const weatherData = await getWeather(cityName);

                if (!weatherData) {
                    console.error(`No weather data found for ${cityName}`);
                    continue;
                }

                const alertMessage = checkForAlerts(weatherData);
                console.log(`Alert message for ${cityName}: ${alertMessage}`);
                alerts.push({ cityName, alertMessage });
            } catch (error) {
                console.error(`Error getting weather data for ${cityName}:`, error);
            }
        }

        sendAlert(alerts);
        console.log(`Weather data processed successfully.\n${alerts.map(alert => `${alert.cityName}: ${alert.alertMessage}`).join("\n")}`);
    } catch (error) {
        console.error("Error in weatherMonitorController:", error);
    }
};