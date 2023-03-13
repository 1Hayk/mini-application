import { useAppSelector } from "../store.helpers";

export const useMaterialsForm = () => useAppSelector(state => state.materials.form)