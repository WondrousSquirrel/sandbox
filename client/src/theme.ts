import { createContext } from 'react'

export const themes = {
    dark: {
        'backgroundColor': '#141414',
        'secondColor': '#0A0A0A',
        'color': '#FFFFFF'
    },
    light: {
        'backgroundColor': '#FFFFFF',
        'secondColor': '#F5F5F5',
        'color': '#141414'
    }
}

const ThemeContext = createContext(themes.light);

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
