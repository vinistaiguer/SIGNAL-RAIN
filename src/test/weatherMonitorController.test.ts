import { weatherMonitorController } from '../controllers/weatherMonitorController';
import { checkForAlerts } from '../services/checkForAlerts';
import { sendAlert } from '../services/sendAlert';
import { getWeather } from '../services/weatherService';

jest.mock('../services/weatherService');
jest.mock('../services/checkForAlerts');
jest.mock('../services/sendAlert');

describe('weatherMonitorController', () => {
    beforeEach(() => {
        // Limpa mocks entre os testes
        jest.clearAllMocks();
    });

    it('should handle weather data correctly', async () => {
        // Mock de dados de clima para as cidades
        const mockWeatherData = {
            temperature: 25,
            humidity: 60,
            conditions: 'Clear'
        };

        // Mock de retorno da função getWeather
        (getWeather as jest.Mock).mockResolvedValueOnce(mockWeatherData); // Mock para Rio Branco
        (getWeather as jest.Mock).mockResolvedValueOnce(null); // Mock para Maceió

        // Mock de retorno da função checkForAlerts
        (checkForAlerts as jest.Mock).mockReturnValueOnce('No alerts');

        // Chama a função weatherMonitorController
        await weatherMonitorController();

        // Verificações dos mocks
        expect(getWeather).toHaveBeenCalledTimes(2); // Deve chamar getWeather para cada cidade
        expect(checkForAlerts).toHaveBeenCalledTimes(1); // Deve chamar checkForAlerts para uma cidade com dados de clima válidos
        expect(sendAlert).toHaveBeenCalledTimes(1); // Deve chamar sendAlert uma vez após processar os dados do clima
    });

    it('should handle error in weather data retrieval', async () => {
        // Mock de retorno da função getWeather para simular erro na primeira cidade e sucesso na segunda
        (getWeather as jest.Mock).mockRejectedValueOnce(new Error('Weather service unavailable')); // Mock para Rio Branco
        (getWeather as jest.Mock).mockResolvedValueOnce({ temperature: 25, humidity: 60, conditions: 'Clear' }); // Mock para Maceió

        // Mock de retorno da função checkForAlerts
        (checkForAlerts as jest.Mock).mockReturnValueOnce('No alerts');

        // Chama a função weatherMonitorController
        await weatherMonitorController();

        // Verificações dos mocks
        expect(getWeather).toHaveBeenCalledTimes(2); // Deve tentar obter dados de clima para cada cidade
        expect(checkForAlerts).toHaveBeenCalledTimes(1); // Deve chamar checkForAlerts para a cidade com dados de clima válidos
        expect(sendAlert).toHaveBeenCalledTimes(1); // Deve chamar sendAlert uma vez após processar os dados do clima
    });
});