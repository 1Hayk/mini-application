import { MaterialItem } from "../Materials/Materials.types";
import { Controller, FieldError } from "react-hook-form";
import type { MaterialsForm } from "../../../../store/materials/materials.types";
import type { Control } from 'react-hook-form';
import Select from 'react-select';
import type { SingleValue } from "react-select";
import type { OptionItem } from '../Materials/Materials.types';
import styles from './Material.module.scss'

interface IMaterialProps {
    item: MaterialItem,
    control: Control<any, object>
    error?: FieldError
}

export const Material: React.FC<IMaterialProps> = ({ item, control, error }) => {
    return (
        <div className={styles.selectContainer} >
            <Controller
                rules={{ required: `${item.title} is required!` }}
                name={item.title as keyof MaterialsForm}
                control={control}
                render={({ field: { onChange, ref } }) => (
                    <Select
                        placeholder={`Enter ${item.title}`}
                        // defaultValue={{ value: "null", label: item.title }}
                        options={item.options}
                        onChange={(el: SingleValue<OptionItem>) => onChange(el?.label)}
                        ref={ref}
                    />
                )}
            />
            {error && <div className={styles.error}>{error.message}</div>}
        </div>

    );
};
