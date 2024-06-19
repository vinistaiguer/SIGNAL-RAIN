type Alert = {
    cityName: string;
    alertMessage: string;
};

export function sendAlert(alerts: Alert[]) {
    if (alerts && alerts.length > 0) {
        alerts.forEach(alert => {
            console.log(`Alert for ${alert.cityName}: ${alert.alertMessage}`);
        });
    }
}