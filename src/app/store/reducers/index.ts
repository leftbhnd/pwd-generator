import { combineReducers } from '@reduxjs/toolkit'
import { pwdReducer } from './pwdReducer'

export const rootReducer = combineReducers({
    pwd: pwdReducer
})

export type RootState = ReturnType<typeof rootReducer>