import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../app/store/reducers";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector