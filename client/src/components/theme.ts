import { createContext } from 'react'

export const themes = {
    dark: {
        'backgroundColor': '#1F1F1F',
        'secondColor': '#0A0A0A',
        'borderColor': '#332F37',
        'color': '#F7F7F2',
        'color2': '#E9ECF580',
        'buttonColor': '#A3A3A3',
        'buttonColor2': '#FA9961',
        'buttonColor3': '#303136'
    },
    light: {
        'backgroundColor': '#F7F7F2',
        'secondColor': '#F5F5F5',
        'borderColor': '#EDE8EB',
        'buttonColor': '#DBE0E6',
        'color': '#1F1F1F',
        'color2': '#24203880',
        'buttonColor2': '#FA9961',
        'buttonColor3': '#C2C2C2'
    }
}

const ThemeContext = createContext(themes.light);

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
