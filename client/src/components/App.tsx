import * as React from "react";
import { Provider } from "react-redux";
import store from "../store/store";

const App = () => <Provider store={store}>
    <div>App Started</div>
</Provider>

export default App;