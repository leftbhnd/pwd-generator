export const enum ActionType {
    USE_UPPER = 'USE_UPPER',
    USE_NUMBER = 'USE_NUMBER',
    USE_SPEC = 'USE_SPEC',
    PWD_LENGTH = 'PWD_LENGTH',
    NUMBER_LENGTH = 'NUMBER_LENGTH',
    SPEC_LENGTH = 'SPEC_LENGTH',
}

export interface IAction {
    type: ActionType.USE_UPPER | ActionType.USE_NUMBER | ActionType.USE_SPEC | ActionType.NUMBER_LENGTH | ActionType.SPEC_LENGTH | ActionType.PWD_LENGTH;
    payload: any
}

export interface IState {
    useUpper: boolean;
    useNumber: boolean;
    useSpecSymbols: boolean;
    pwdLength: number;
    numberLength: number;
    specLength: number;
    pwd: string;
}