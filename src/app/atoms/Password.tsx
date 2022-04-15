import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { PwdGenerator } from '../services/pwdGenerator'

const Password: React.FC = () => {
    const {
        useUpper,
        useNumber,
        useSpecSymbols,
        pwdLength
    } = useTypedSelector(state => state.pwd)

    const generator = new PwdGenerator(pwdLength, useUpper, useNumber, useSpecSymbols)

    return (
        <div>
            {generator.pwd()}
        </div>
    )
}

export default Password