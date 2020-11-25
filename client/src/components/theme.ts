import { createContext } from 'react'

export const themes = {
    dark: {
        'backgroundColor': '#1F1F1F',
        'secondColor': '#0A0A0A',
        'color': '#F7F7F2'
    },
    light: {
        'backgroundColor': '#F7F7F2',
        'secondColor': '#F5F5F5',
        'color': '#1F1F1F'
    }
}

const ThemeContext = createContext(themes.light);

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
