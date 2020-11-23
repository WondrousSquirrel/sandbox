import app from './app';
import { app_config } from './config'
import logger from './services/logger';
import setup_websocket from './services/setup_websocket';

const PORT = process.env.PORT || 5000;

const get_current_data = (socket) => {
    let curr_date = new Date
    socket.send(curr_date);
}

const server = app.listen(PORT, () => {
    logger.debug(
        `name: ${app_config.name}, version: ${app_config.version}, environment: ${app_config.environment}
        \nhas started: http://localhost:${PORT}`
    )
});

setup_websocket(server).then(socket => {
    console.log("connected");
    get_current_data(socket);
    setInterval(() => {
        get_current_data(socket);
    }, 1000)

    socket.on("close", () => {
        // number of connections
        console.log("closed", socket.connections);
    });
}).catch(e => {
    console.log(e)

});