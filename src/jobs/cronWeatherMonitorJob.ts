import cron from 'node-cron';
import { weatherMonitorController } from '../controllers/weatherMonitorController';

export function cronWeatherMonitorJob() {
  cron.schedule('0 8 1,16 * *', async () => {
    console.log('Executing task schedule...');
    await weatherMonitorController();
  });
}