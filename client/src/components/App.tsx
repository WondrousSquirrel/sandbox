import React, { useEffect } from "react";
import { Provider } from "react-redux";
// import { socket_connection, socket_unsubscribe, ws } from "../services/socket_connection";
import store from "../store/store";

const App = () => {
    return (
        <Provider store={store}>
            <>
                <div>App Started</div>
            </>
        </Provider>
    )
}

export default App;