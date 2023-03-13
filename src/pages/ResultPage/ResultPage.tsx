import React from 'react';
import { Navigate, useNavigate } from 'react-router';
import { useMaterialsForm } from '../../store/materials/materials.selectors';
import { MaterialsForm } from '../../store/materials/materials.types';
import styles from './ResultPage.module.scss'

export const ResultPage: React.FC = () => {
    const navigate = useNavigate();
    const materialForm = useMaterialsForm();

    return (
        <>
            {
                Object.values(materialForm).filter(item => item === null).length
                    ?
                    <Navigate to='/' />
                    :
                    <div className={styles.container}>
                        <h2 className={styles.title}>Your choices</h2>
                        {Object.keys(materialForm).map(title => (
                            <div key={title}>
                                <span className={styles.spanTitle}>{title}</span>
                                -
                                <span>{materialForm[title as keyof MaterialsForm]}</span>
                            </div>
                        ))}
                        <button className={styles.btn} onClick={() => navigate(-1)}> Go back</button>
                    </div>
            }
        </>
    );
};

