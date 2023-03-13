import { combineReducers } from "redux";
import { materialsSlice } from "./materials/materials.slice";

export const reducer = combineReducers({
    materials: materialsSlice.reducer
});
