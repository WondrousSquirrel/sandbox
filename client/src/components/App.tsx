import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store/store";

const App = () => {
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:5000/sockjs-node')
        ws.onopen = () => {
            console.log('Websocket connected');
        }
        return () => {
            ws.onclose = () => {
                console.log('Wesocket connection closed');
            }
            ws.close();
        }
    }, []);
    return (
        <Provider store={store}>
            <>
                <div>App Started</div>
            </>
        </Provider>
    )
}

export default App;