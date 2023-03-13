import React from 'react';
import { Materials } from './components/Materials';
import styles from "./HomePage.module.scss"

export const HomePage: React.FC = () => {

    return (
        <div className={styles.container} >
            <h1 className={styles.title} >Please enter material type</h1>
            <Materials />
        </div>
    );
};

