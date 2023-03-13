import { createSlice } from "@reduxjs/toolkit";
import { MaterialsState } from "./materials.types";

const initialState: MaterialsState = {
    form: {
        "Frame Color": null,
        "Frame Material": null,
        "Glass Type": null
    }

}
export const materialsSlice = createSlice({
    name: 'materials',
    initialState,
    reducers: {
        setMaterialForm: (state, { payload }) => {
            state.form = payload
        }
    }
});

export const { setMaterialForm } = materialsSlice.actions