import WebSocket from 'ws';

const setup_websocket = server => {
    return new Promise((resolve, reject) => {
        const websocket_server = new WebSocket.Server({ server: server });

        websocket_server.on("connection", socket => resolve(socket));
        websocket_server.on("error", error => reject(error))
    })
}

export default setup_websocket;