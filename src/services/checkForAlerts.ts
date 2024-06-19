export function checkForAlerts(weatherData) {
    if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
        const condition = weatherData.weather[0].main;

        switch (condition) {
            case 'Thunderstorm':
                return "Alerta: Tempestade severa se aproximando. Procure abrigo imediato.";
            case 'Drizzle':
                return "Alerta: Garoa constante. Dirija com cuidado.";
            case 'Rain':
                return "Alerta: Chuva intensa. Risco de inundações.";
            case 'Snow':
                return "Alerta: Neve. Estradas escorregadias.";
            case 'Mist':
                return "Alerta: Névoa. Visibilidade reduzida.";
            case 'Smoke':
                return "Alerta: Fumaça. Qualidade do ar prejudicada.";
            case 'Haze':
                return "Alerta: Neblina. Visibilidade reduzida.";
            case 'Dust':
                return "Alerta: Poeira. Qualidade do ar prejudicada.";
            case 'Fog':
                return "Alerta: Nevoeiro. Visibilidade muito reduzida.";
            case 'Sand':
                return "Alerta: Tempestade de areia. Evite sair de casa.";
            case 'Ash':
                return "Alerta: Cinzas vulcânicas. Use máscara ao sair.";
            case 'Squall':
                return "Alerta: Rajadas de vento. Evite áreas abertas.";
            case 'Tornado':
                return "Alerta: Tornado detectado. Procure abrigo imediatamente.";
            case 'Clear':
                return "Céu limpo. Aproveite o dia!";
            case 'Clouds':
                return "Nublado. Sem previsão de eventos extremos.";
            default:
                return 'Unknown weather condition.';
        }
    }
    return null;
}