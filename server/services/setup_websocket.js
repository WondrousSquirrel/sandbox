import WebSocket from 'ws';

const setup_websocket = server => {
    const websocket_server = new WebSocket.Server({server : server}); 

    websocket_server.on("connection", socket => {
        // number of connections
        console.log("connected", websocket_server.clients.size);

        socket.on("close", () => {
            console.log("closed", websocket_server.clients.size);
        });

        socket.send("connection established.");
    });
}

export default setup_websocket;