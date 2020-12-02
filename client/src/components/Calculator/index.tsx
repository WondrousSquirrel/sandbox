import React, { useContext, FunctionComponent, useState } from 'react';
import ThemeContext from '../theme';

import './calculator.scss'
import Button from './Button';

type Operator = '+' | '-' | '*' | '/';

const Calculator: FunctionComponent = () => {

    const theme = useContext(ThemeContext);
    const [display, setDisplay] = useState<string>('0') // правая часть выражения
    const [memory, setMemory] = useState<number>(0)
    // не позволяет установить оператор с левой стороны операнда
    const [waitOperand, setWaitForOperand] = useState<boolean>(true) 
    // записиываем выбранный оператор и выполняем указанную операцию
    const [pendingOperator, setPendingOperator] = useState<Operator>()
    const [result, setResult] = useState<number>(0) // ялвяется левой частью выражения
    // переключаем операции на работу с процентами
    const [percentMode, setPercentMode] = useState<boolean>(false);
    const percentage = () => {
        setPercentMode(!percentMode);
    }

    const calculate = (rightOperand: number, pendingOperator: Operator): boolean => {
        let newResult = result;
        let convertToPercent = result / 100 * rightOperand;
        // выбераем необходимую операцию
        switch (pendingOperator) {
            case '+':
                // проверка на работу с процентами
                percentMode ? newResult +=  convertToPercent: newResult += rightOperand
                break
            case '-':
                percentMode ? newResult -= convertToPercent : newResult -= rightOperand
                break
            case '*':
                percentMode ? newResult *= convertToPercent : newResult *= rightOperand
                break
            case '/':
                if (rightOperand === 0) {
                    return false
                }
                percentMode ? newResult /= convertToPercent : newResult /= rightOperand
                break;
        }

        console.log('before setting ' + newResult)
        setResult(newResult)
        setDisplay(newResult.toString().slice(0, 15))
        return true
    }

    const addNumber = (digit: Number) => {
        // ставим цифру
        let newDisplay = display

        // если экран пуст и выбрано число 0 или длина более 15 символов - ничего не делаем
        if ((display === '0' && digit === 0) || display.length > 15) {
          return
        }
        // после добавления числа позволяем выбирать операцию
        if (waitOperand) {
          newDisplay = ''
          setWaitForOperand(false)
        }
    
        if (display !== '0') {
          newDisplay = newDisplay + digit.toString()
        } else {
          newDisplay = digit.toString()
        }
    
        setDisplay(newDisplay)
    }


    const letDot = () => {
        let newDisplay = display

        if (waitOperand) {
            newDisplay = '0'
        }

        if (newDisplay.indexOf('.') === -1) {
            newDisplay = newDisplay + '.'
        }

        setDisplay(newDisplay)
        setWaitForOperand(false)
    }


    const addOperator = (operator: Operator) => {
        const operand = Number(display)

        // если выбран оператор выполняем операцию
        if (typeof pendingOperator !== 'undefined' && !waitOperand) {
            if (!calculate(operand, pendingOperator)) { // в случае ошибки выходим из функции
                return
            }
        } else { // или записываем число в левую часть выражения
            setResult(operand)
        }

        setPendingOperator(operator) // записываем опирацию
        setWaitForOperand(true)
    }



    const changeSign = () => {
        // меняем знак числа
        const value = Number(display)

        if (value > 0) {
            setDisplay('-' + display)
        } else if (value < 0) {
            setDisplay(display.slice(1)) // отсекаем перый индекс правого выражения
        }
    }

    const equal = () => {
        const operand = Number(display)

        if (typeof pendingOperator !== 'undefined' && !waitOperand) {
            if (!calculate(operand, pendingOperator)) {
                return
            }

            setPendingOperator(undefined)
        } else {
            setDisplay(operand.toString())
        }

        setResult(operand)
        setWaitForOperand(true)
        console.log('result ' + result)
    }


    const allClear = () => {
        // чистка всех данных
        setMemory(0)
        setResult(0)
        setPendingOperator(undefined)
        setDisplay('0')
        setWaitForOperand(true)
    }

    const memoryRecall = () => {
        // получаем значение из памяти
        setDisplay(memory.toString())
        setWaitForOperand(true)
    }

    const memoryClear = () => {
        setMemory(0)
        setWaitForOperand(true)
    }

    const addToMemory = () => {
        setMemory(memory + Number(display))
        setWaitForOperand(true)
    }

    const remooveFromMemory = () => {
        setMemory(memory - Number(display))
        setWaitForOperand(true)
    }

    return (
        <div className='centered'>

            <div className='calculator' style={{ backgroundColor: theme.secondColor, borderColor: theme.borderColor }}>
                <div className='display'>
                    <div className='memory' style={{ color: theme.color2 }}>
                        <p>{ percentMode ? '%': null}</p>
                        <p>{memory === 0 ? null : memory}</p>
                    </div>
                    <div className='input'>
                        <span>{display.length > 0 ? display : 0}</span>
                    </div>
                </div>
                <div className="grid">
                    <Button text='AC' backgroundColor={theme.buttonColor} onClick={allClear} />
                    <Button text='+/-' backgroundColor={theme.buttonColor} onClick={changeSign} />
                    <Button text='%' backgroundColor={theme.buttonColor} onClick={percentage} />
                    <Button text='/' backgroundColor={theme.buttonColor2} onClick={() => addOperator('/')} />
                    <Button text='mc' backgroundColor={theme.buttonColor3} onClick={memoryClear} />
                    <Button text='mr' backgroundColor={theme.buttonColor3} onClick={memoryRecall} />
                    <Button text='m-' backgroundColor={theme.buttonColor3} onClick={remooveFromMemory} />
                    <Button text='m+' backgroundColor={theme.buttonColor2} onClick={addToMemory} />
                    <Button text='7' backgroundColor={theme.buttonColor3} onClick={() => addNumber(7)} />
                    <Button text='8' backgroundColor={theme.buttonColor3} onClick={() => addNumber(8)} />
                    <Button text='9' backgroundColor={theme.buttonColor3} onClick={() => addNumber(9)} />
                    <Button text='*' backgroundColor={theme.buttonColor2} onClick={() => addOperator('*')} />
                    <Button text='4' backgroundColor={theme.buttonColor3} onClick={() => addNumber(4)} />
                    <Button text='5' backgroundColor={theme.buttonColor3} onClick={() => addNumber(5)} />
                    <Button text='6' backgroundColor={theme.buttonColor3} onClick={() => addNumber(6)} />
                    <Button text='-' backgroundColor={theme.buttonColor2} onClick={() => addOperator('-')} />
                    <Button text='1' backgroundColor={theme.buttonColor3} onClick={() => addNumber(1)} />
                    <Button text='2' backgroundColor={theme.buttonColor3} onClick={() => addNumber(2)} />
                    <Button text='3' backgroundColor={theme.buttonColor3} onClick={() => addNumber(3)} />
                    <Button text='+' backgroundColor={theme.buttonColor2} onClick={() => addOperator('+')} />
                </div>
                <div className="bottom-grid">
                    <Button text='0' backgroundColor={theme.buttonColor3} className='double-sized' onClick={() => addNumber(0)} />
                    <Button text=',' backgroundColor={theme.buttonColor3} className='dot-btn' onClick={letDot} />
                    <Button text='=' backgroundColor={theme.buttonColor2} className='equal-btn' onClick={equal} />

                </div>
            </div>

        </div>
    )
}

export default Calculator;