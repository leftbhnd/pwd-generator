import { IAction, IState, ActionType } from '../types/pwd'

const initialState = {
    useUpper: false,
    useNumber: false,
    useSpecSymbols: false,
    pwdLength: 6,
    numberLength: 0,
    specLength: 0,
    pwd: ''
}

export const pwdReducer = (state = initialState, action: IAction): IState => {
    switch (action.type) {
        case ActionType.USE_UPPER:
            return { ...state, useUpper: action.payload }
        case ActionType.USE_NUMBER:
            return { ...state, useNumber: action.payload, numberLength: 1 }
        case ActionType.USE_SPEC:
            return { ...state, useSpecSymbols: action.payload, specLength: 1 }
        case ActionType.PWD_LENGTH:
            return { ...state, pwdLength: action.payload }
        case ActionType.NUMBER_LENGTH:
            return { ...state, numberLength: action.payload }
        case ActionType.SPEC_LENGTH:
            return { ...state, specLength: action.payload }
        default:
            return state

    }
}