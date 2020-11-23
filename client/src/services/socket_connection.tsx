export const ws = new WebSocket('ws://localhost:5000/sockjs-node')

export const socket_connection = (socket: WebSocket)  => {
    socket.onopen = () => {
        console.log('Websocket connected');
    }
    socket.onclose = () => {
        console.log('Wesocket connection closed');
    }
}

export const socket_unsubscribe = (socket: WebSocket) => {
    socket.close()
}