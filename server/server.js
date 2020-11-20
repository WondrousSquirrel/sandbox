import app from './app';
import logger from './services/logger';
import { app_config } from './config'
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    logger.debug(
        `name: ${app_config.name}, version: ${app_config.version}, environment: ${app_config.environment}
        \nhas started: http://localhost:${PORT}`
    )
});
