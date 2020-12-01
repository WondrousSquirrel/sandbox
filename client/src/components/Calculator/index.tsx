import React, { useContext, FunctionComponent, useState } from 'react';
import ThemeContext from '../theme';

import './calculator.scss'
import Button from './Button';

const Calculator: FunctionComponent = () => {

    const theme = useContext(ThemeContext);
    const [display, setDisplay] = useState([0]);

    const handleClick = () => {
        console.log('button')
    }


    const addNumber = (value: any) => {
        setDisplay([...display, value]);
    }

    const calculate = () => {
        const expression = [...display].join(' ');
        console.log(expression);
    }

    return (
        <div className='centered'>

            <div className='calculator' style={{ backgroundColor: theme.secondColor, borderColor: theme.borderColor }}>
                <div className='display'><p>{display.map(c => c)}</p></div>
                <div className="grid">
                    <Button text='AC' backgroundColor={theme.buttonColor} onClick={handleClick} />
                    <Button text='+/-' backgroundColor={theme.buttonColor} onClick={handleClick} />
                    <Button text='%' backgroundColor={theme.buttonColor} onClick={handleClick} />
                    <Button text='/' backgroundColor={theme.buttonColor2} onClick={handleClick} />
                    <Button text='mc' backgroundColor={theme.buttonColor3} onClick={handleClick} />
                    <Button text='mr' backgroundColor={theme.buttonColor3} onClick={handleClick} />
                    <Button text='m-' backgroundColor={theme.buttonColor3} onClick={handleClick} />
                    <Button text='m+' backgroundColor={theme.buttonColor2} onClick={handleClick} />
                    <Button text='7' backgroundColor={theme.buttonColor3} onClick={() => addNumber(7)} />
                    <Button text='8' backgroundColor={theme.buttonColor3} onClick={() => addNumber(8)} />
                    <Button text='9' backgroundColor={theme.buttonColor3} onClick={() => addNumber(9)} />
                    <Button text='*' backgroundColor={theme.buttonColor2} onClick={() => addNumber('*')} />
                    <Button text='4' backgroundColor={theme.buttonColor3} onClick={handleClick} />
                    <Button text='5' backgroundColor={theme.buttonColor3} onClick={handleClick} />
                    <Button text='6' backgroundColor={theme.buttonColor3} onClick={handleClick} />
                    <Button text='-' backgroundColor={theme.buttonColor2} onClick={handleClick} />
                    <Button text='1' backgroundColor={theme.buttonColor3} onClick={() => addNumber(1)} />
                    <Button text='2' backgroundColor={theme.buttonColor3} onClick={() => addNumber(2)} />
                    <Button text='3' backgroundColor={theme.buttonColor3} onClick={() => addNumber(3)} />
                    <Button text='+' backgroundColor={theme.buttonColor2} onClick={() => addNumber('+')} />
                </div>
                <div className="bottom-grid">
                    <Button text='0' backgroundColor={theme.buttonColor3} className='double-sized' onClick={handleClick} />
                    <Button text=',' backgroundColor={theme.buttonColor3} className='dot-btn' onClick={handleClick} />
                    <Button text='=' backgroundColor={theme.buttonColor2} className='equal-btn' onClick={calculate} />

                </div>
            </div>

        </div>
    )
}

export default Calculator;