import { useForm } from 'react-hook-form';
import { MaterialsForm } from '../../../../store/materials/materials.types';
import { useAppDispatch } from '../../../../store/store.helpers';
import { setMaterialForm } from '../../../../store/materials/materials.slice';
import { useNavigate } from 'react-router';
import { Material } from '../Material/Material';
import { MaterialItems } from '../../../../configs/material.config';
import styles from './Materials.module.scss'

export const Materials = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { control, handleSubmit, formState: { errors } } = useForm<MaterialsForm>({
        defaultValues: {
            "Frame Color": null,
            "Frame Material": null,
            "Glass Type": null
        },
        mode: 'onBlur'
    });

    const onSubmit = (data: MaterialsForm) => {
        dispatch(setMaterialForm(data));
        navigate('/results');
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
        >
            <div className={styles.materialContainer}>
                {MaterialItems.map(item => (
                    <Material
                        key={item.title}
                        item={item} control={control}
                        error={errors[item.title as keyof MaterialsForm]}
                    />
                ))}
            </div>
            <div className={styles.btnContainer}>
                <button
                    className={styles.btn}
                >
                    Submit
                </button>
            </div>

        </form>
    );
};
