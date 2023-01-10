import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Button from "./Components/Button";
import {Input} from "./Components/Input";
import {start} from "repl";

type CheckedProps = 'add' | 'reset'

function App() {

    const [error, setError] = useState('')



    const [startValue, setStartValue] = useState<number>(0)

    const onChangeStartInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(startValue, maxValue)
        console.log(e.currentTarget.valueAsNumber)

        if(e.currentTarget.valueAsNumber >= maxValue || maxValue === startValue) {
            setError('\n' +
                'start value cannot be greater than or equal to the maximum')
        }
        if(startValue < maxValue) {
            setError('')
        }
        /*const startEventValue = e.currentTarget.valueAsNumber
        if(startEventValue >= zero) setStartValue(startEventValue)*/
        setStartValue(e.currentTarget.valueAsNumber)


    }

    const [maxValue, setMaxiValue] = useState<number>(0)

    const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(startValue <= e.currentTarget.valueAsNumber) {
            setError('')
        }

        setMaxiValue(e.currentTarget.valueAsNumber)
    }



    const addValueButton = () => {
            setStartValue(startValue)
            setMaxiValue(maxValue)
            setCount(startValue)
    }

  const [count, setCount] = useState<number>(startValue)

  const onClickAddHandler = () => {
      if (count < maxValue) setCount(count + 1)
  }

  const onClickResetHandler = () => {
    setCount(startValue)
  }

  const checkedDisabled = (children: CheckedProps) => children === 'add' && count === maxValue || children === 'reset' && count === startValue

    const checkedError = startValue > maxValue ? 'error' : ''

  return (
    <div className="App">
        <div className="DivCount">
            <div className="BorderCount">
                <div className="descriptionCount">first Counter</div>
                <div className={"ValueAndCount"}>
                    <div className={"Value"}>value:</div>
                    <div className={"Count"}>{count}</div>
                </div>
                <div className={"ButtonsCount"}>
                    <Button onClick={onClickAddHandler} color={'blue'} children={'add'} disabled={checkedDisabled('add')}/>
                    <Button onClick={onClickResetHandler} color={'blue'} children={'reset'} disabled={checkedDisabled('reset')}/>
                    <div className={"ButtonInput"}>
                        <Button onClick={addValueButton} color={'purple'} children={'set'} />
                    </div>
                </div>
            </div>
        </div>

        <div className={"InputsAndValue"}>
            <div>start:</div>
                <Input
                    color={checkedError}
                    onChange={onChangeStartInputHandler}
                    value={startValue}
                />
            {error && <div className={"ErrorMassage"}>{error}</div>}
        </div>

        <div className={"InputsAndValue"}>
            <div>max</div>
                <Input
                    onChange={onChangeMaxInputHandler}
                    value={maxValue}
                />
        </div>


    </div>
  );
}

export default App;
