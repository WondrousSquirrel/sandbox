import React, { useState } from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './toggleSwitch.scss'

interface ToogleSwitch {
    changeTheme: Function
}
const ToggleSwitch = (props: ToogleSwitch) => {

    const [checked, setChecked] = useState(false)
    const onToggleSwitchChange = () => {
        setChecked(!checked)
        props.changeTheme()
    }

    return (
        <div
            onClick={onToggleSwitchChange}
            className={checked ? 'toggle toggle--checked' : 'toggle'}>
            <span className='toggle-on' ><FontAwesomeIcon icon={faSun}/></span>
            <span className='toggle-off'><FontAwesomeIcon icon={faMoon}/></span>
            <div className='toggle-slider'></div>
        </div>
    )
}
export default ToggleSwitch;        