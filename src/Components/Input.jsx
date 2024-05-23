import React, { useContext } from 'react';
import { DataProvider } from '../Pages/ListPage';
import NewTaskModal from '../Modals/NewTaskModal';

import styles from "../Styles/Input.module.css";

export default function Input(props) {

    const { setIsOpen, isOpen } = useContext(DataProvider);

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <div>
            <button className={styles.inputbutton} onClick={openModal}><i className="fa fa-plus"></i>  Add Task</button>
            {isOpen && (
                <NewTaskModal></NewTaskModal>
            )}
        </div>
    )
}
