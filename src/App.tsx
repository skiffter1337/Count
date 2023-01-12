import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Button from "./Components/Button";
import {Input} from "./Components/Input";

function App() {

    const zero = 0
    // Стартовое значение
    const [startValue, setStartValue] = useState<number>(zero)
    // Максимальное значение
    const [maxValue, setMaxValue] = useState<number>(7)
    // Вывод счетчик
    const [count, setCount] = useState<number>(startValue)
    // Вывод текста ошибки
    const [error, setError] = useState<string>('')

    const [settings, setSetting] = useState<boolean>(false)

    const errorMessageStart = 'Error. The start value cannot be less than zero or greater than or equal to the maximum value.'
    const errorMessageMax = 'Error. The maximum value cannot be less than zero or less than or equal to the initial value.'

    // Если в поле инпут Start вводим правильное значение убираем надпись ошибки | передаем значение в максимальное
    const onChangeStartInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let targetStartInput = e.currentTarget.valueAsNumber
        // Вывод текста ошибки по условию + удаление ошибки
        targetStartInput >= maxValue || targetStartInput < zero ? setError(errorMessageStart) : setError('')
        // Передаем стартовое значение в переменную
        setStartValue(targetStartInput)
    }

    // Если в поле инпут Max вводим правильное значение убираем надпись ошибки | передаем значение в максимальное
    const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let targetMaxInput = e.currentTarget.valueAsNumber
        // Вывод текста ошибки по условию + удаление ошибки
        targetMaxInput <= startValue || targetMaxInput < zero ? setError(errorMessageMax) : setError('')
        // Передаем максимальное значение в переменную
        setMaxValue(targetMaxInput)
    }

    // Кнопка Set пере
    const addValueButton = () => {
        setStartValue(startValue)
        setMaxValue(maxValue)
        setCount(startValue)
        setSetting(!settings)
    }

    // По клику на кнопку add прибавить 1
    const onClickAddHandler = () => {
        if (count < maxValue) setCount(count + 1)
    }
    // По клику на кнопку reset вывести 0
    const onClickResetHandler = () => {
        setCount(startValue)
    }

    // Дизейбл кнопки add по условию
    const checkedDisabledAdd = count === maxValue || startValue < zero || maxValue < zero ? 'disabledBlue' : 'blue'
    // Дизейбл кнопки reset по условию
    const checkedDisabledReset = count === startValue ? 'disabledBlue' : 'blue'
    // Дизейбл кнопки set по условию
    const checkedDisabledSet = startValue >= maxValue || startValue < zero || maxValue < zero || maxValue <= startValue ? 'disabledPurple' : 'purple'

    // Подсвечивание инпута красным по условию для стартового значения
    const checkedErrorStart = startValue >= maxValue ? 'error' : '' || startValue < zero ? 'error' : ''
    // Подсвечивание инпута красным по условию для стартового значения
    const checkedErrorMax = maxValue <= startValue ? 'error' : '' || maxValue < zero ? 'error' : ''


    return (
        <div className="App">
            <div className="DivCount">
                <div className="BorderCount">
                    {settings
                        ?
                        <>
                            <div className="descriptionCountAndSettings">please enter correct Value</div>
                            <div className={"ErrorMassage"}>{error}</div>
                            <div className={"InputsMaxStartErrorMassage"}>
                                <div className={"StartMax"}>
                                    <div className={"Max"}>start:</div>
                                    <div className={"Start"}>max:</div>
                                </div>
                                <div>
                                    <div className={"Inputs"}>
                                        <Input color={checkedErrorStart} onChange={onChangeStartInputHandler}
                                               value={startValue}/>
                                        <Input color={checkedErrorMax} onChange={onChangeMaxInputHandler}
                                               value={maxValue}/>
                                    </div>
                                    <div>
                                        <Button onClick={addValueButton} color={checkedDisabledSet} children={'set'}/>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="descriptionCountAndSettings">first Counter</div>
                            <div className={"ValueAndCount"}>
                                <div className={"Value"}>value:</div>
                                <div className={"Count"}>{count}</div>
                            </div>
                            <div className={"ButtonsCount"}>
                                <Button onClick={onClickAddHandler} color={checkedDisabledAdd} children={'add'}/>
                                <Button onClick={onClickResetHandler} color={checkedDisabledReset} children={'reset'}/>
                                <div>
                                    <Button onClick={addValueButton} color={checkedDisabledSet} children={'set'}/>
                                </div>
                            </div>
                        </>}
                </div>
            </div>
        </div>
    );
}

export default App;
