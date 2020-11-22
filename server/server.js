import app from './app';
import { app_config } from './config'
import logger from './services/logger';
import setup_websocket from './services/setup_websocket';

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    logger.debug(
        `name: ${app_config.name}, version: ${app_config.version}, environment: ${app_config.environment}
        \nhas started: http://localhost:${PORT}`
    )
});

setup_websocket(server);