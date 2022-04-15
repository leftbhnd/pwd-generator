import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ActionType } from '../store/types/pwd'

const AdditionalLength: React.FC = () => {
    const {
        useNumber,
        useSpecSymbols,
        pwdLength,
        numberLength,
        specLength
    } = useTypedSelector(state => state.pwd)
    const checkMinQuantity = (value: Number) => {
        return value > 0 ? false : true
    }
    const checkMaxQuantity = () => {
        return (pwdLength - numberLength - specLength) > 0 ? false : true
    }
    const dispatch = useDispatch()
    const handleChange = (type: ActionType, payload: Number) => {
        dispatch({ type: type, payload: payload })
    }
    return (
        <div>
            {useNumber && <section className="settings">
                <p>Numbers quantity:</p>
                <section className="counter">
                    <button disabled={checkMinQuantity(numberLength)}
                        onClick={() => handleChange(ActionType.NUMBER_LENGTH, numberLength - 1)}
                    >
                        -
                    </button>
                    <p>{numberLength}</p>
                    <button disabled={checkMaxQuantity()}
                        onClick={() => handleChange(ActionType.NUMBER_LENGTH, numberLength + 1)}
                    >
                        +
                    </button>
                </section>
            </section>}
            {useSpecSymbols && <section className="settings">
                <p>Spec symbols quantity:</p>
                <section className="counter">
                    <button disabled={checkMinQuantity(specLength)}
                        onClick={() => handleChange(ActionType.SPEC_LENGTH, specLength - 1)}
                    >
                        -
                    </button>
                    <p>{specLength}</p>
                    <button disabled={checkMaxQuantity()}
                        onClick={() => handleChange(ActionType.SPEC_LENGTH, specLength + 1)}
                    >
                        +
                    </button>
                </section>
            </section>}
        </div>
    )
}

export default AdditionalLength