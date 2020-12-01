import React, { useContext } from 'react';
import ThemeContext from '../theme';

import Button from './Button';

import './calculator.scss'

const Calculator = () => {

    const theme = useContext(ThemeContext)

    const values = [1, '+', 3]

    return (
        <div className='centered'>

            <div className='calculator' style={{ backgroundColor: theme.secondColor, borderColor: theme.borderColor}}>
                <div className='display'><p>{values.map(v => v)}</p></div>
                <div className="grid">
                    <Button text='AC'  backgroundColor={theme.buttonColor} />
                    <Button text='+/-' backgroundColor={theme.buttonColor} />
                    <Button text='%'   backgroundColor={theme.buttonColor} />
                    <Button text='/'   backgroundColor={theme.buttonColor2}/>
                    <Button text='mc'  backgroundColor={theme.buttonColor3}/>
                    <Button text='mr'  backgroundColor={theme.buttonColor3}/>
                    <Button text='m-'  backgroundColor={theme.buttonColor3}/>
                    <Button text='m+'  backgroundColor={theme.buttonColor2}/>
                    <Button text='7'   backgroundColor={theme.buttonColor3}/>
                    <Button text='8'   backgroundColor={theme.buttonColor3}/>
                    <Button text='9'   backgroundColor={theme.buttonColor3}/>
                    <Button text='*'   backgroundColor={theme.buttonColor2}/>
                    <Button text='4'   backgroundColor={theme.buttonColor3}/>
                    <Button text='5'   backgroundColor={theme.buttonColor3}/>
                    <Button text='6'   backgroundColor={theme.buttonColor3}/>
                    <Button text='-'   backgroundColor={theme.buttonColor2}/>
                    <Button text='1'   backgroundColor={theme.buttonColor3}/>
                    <Button text='2'   backgroundColor={theme.buttonColor3}/>
                    <Button text='3'   backgroundColor={theme.buttonColor3}/>
                    <Button text='+'   backgroundColor={theme.buttonColor2}/>
                </div>
                <div className="bottom-grid">
                    <Button text='0' backgroundColor={theme.buttonColor3} className='double-sized'/>
                    <Button text=',' backgroundColor={theme.buttonColor3} className='dot-btn'/>
                    <Button text='=' backgroundColor={theme.buttonColor2} className='equal-btn'/>

                </div>
            </div>

        </div>
    )
}


export default Calculator;