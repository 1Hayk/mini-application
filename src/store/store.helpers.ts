import { useDispatch as useLibDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

import { AppDispatch, RootState } from "./store.types";

export const useAppDispatch = () => useLibDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

