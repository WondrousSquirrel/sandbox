import React, { useContext } from 'react';
import ThemeContext from '../theme';
import ToggleSwitch from '../ToggleSwitch';

import './header.scss'

interface Header {
    changeTheme: Function
}

const Header = (props: Header) => {
    const theme = useContext(ThemeContext);

    return <div className="header" style={{ backgroundColor: theme.secondColor }}>
        <div><h1>Sandbox</h1></div>
        <ToggleSwitch changeTheme={props.changeTheme} />
    </div>

};

export default Header;