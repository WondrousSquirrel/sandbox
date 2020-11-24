import React, {useContext } from 'react';
import ThemeContext from '../theme';

const Test = () => {
    const theme = useContext(ThemeContext);
    return <>
        <h1>{theme.backgroundColor}</h1>
        
    </>
}

export default Test;