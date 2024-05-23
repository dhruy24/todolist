import React from 'react';
import styles from "../Styles/Header.module.css"

const Header = () =>{
    return (
        <>
        {
            <h1 className={styles.header}>To Do List</h1>
        }
        </>
    )
}

export default Header