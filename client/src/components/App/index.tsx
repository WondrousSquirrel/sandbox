import React, { useContext, useState } from "react";
import { Provider } from "react-redux";
import store from "../../store/store";
import Calculator from "../Calculator";
import Header from "../Header";
import ThemeContext, { ThemeProvider, themes } from "../theme";

import "./style.scss";

const App = () => {
    const _theme = useContext(ThemeContext);
    const [theme, setTheme] = useState(_theme)

    const changeTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light)
    }
    return (
        <Provider store={store}>
            <ThemeProvider value={theme}>
                <div className='app' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                    <Header changeTheme={changeTheme}/>
                    <Calculator />
                </div>
            </ThemeProvider>
        </Provider>
    )
}

export default App;