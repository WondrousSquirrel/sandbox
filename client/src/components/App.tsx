import React, { useContext, useState } from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import ThemeContext, { ThemeProvider, themes } from "../theme";

import "./style.scss";
import Test from "./Test";

const App = () => {
    const _theme = useContext(ThemeContext);
    const [theme, setTheme] = useState(_theme)

    const changeTheme = () => {
        setTheme(theme === themes.light? themes.dark: themes.light)
    }
    return (
        <Provider store={store}>
            <ThemeProvider value={theme}>
                <div className='app' style={{backgroundColor: theme.backgroundColor, color: theme.color}}>  
                    <p>App Theme background color: {theme.backgroundColor}</p>
                    <button onClick={changeTheme}>Change Theme</button>
                    <Test />
                </div>
            </ThemeProvider>
        </Provider>
    )
}

export default App;