import cron from 'node-cron';
import { weatherMonitorController } from '../controllers/weatherMonitorController';

export function cronWeatherMonitorJob() {
  cron.schedule('*/1 * * * *', async () => {
    console.log('Executing task schedule...');
    await weatherMonitorController();
  });
}