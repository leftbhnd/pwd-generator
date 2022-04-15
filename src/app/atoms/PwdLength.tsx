import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ActionType } from '../store/types/pwd'

const PwdLength: React.FC = () => {
    const { pwdLength } = useTypedSelector(state => state.pwd)
    const dispatch = useDispatch()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type: ActionType) => {
        const { value } = e.target
        dispatch({ type: type, payload: Number(value) })
    }
    return (
        <div>
            <section className="settings">
                <p>Password length: {pwdLength}</p>
                <input type="range" name="PWD_LENGTH" min="6" max="18"
                    defaultValue="8" onChange={(e) => handleChange(e, ActionType.PWD_LENGTH)}
                />
            </section>
        </div>
    )
}

export default PwdLength