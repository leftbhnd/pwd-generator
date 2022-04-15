import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ActionType } from '../store/types/pwd'

const Settings: React.FC = () => {
    const { useUpper, useNumber, useSpecSymbols } = useTypedSelector(state => state.pwd)
    const dispatch = useDispatch()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type: ActionType) => {
        const { checked } = e.target
        dispatch({ type: type, payload: checked })
    }
    return (
        <div>
            <section className="settings">
                <p>A-Z</p>
                <input type="checkbox" defaultChecked={useUpper}
                    onChange={(e) => handleChange(e, ActionType.USE_UPPER)}
                />
            </section>
            <section className="settings">
                <p>0-9</p>
                <input type="checkbox" defaultChecked={useNumber}
                    onChange={(e) => handleChange(e, ActionType.USE_NUMBER)}
                />
            </section>
            <section className="settings">
                <p>!@#$%^&*</p>
                <input type="checkbox" defaultChecked={useSpecSymbols} 
                    onChange={(e) => handleChange(e, ActionType.USE_SPEC)} 
                />
            </section>
        </div>
    )
}

export default Settings