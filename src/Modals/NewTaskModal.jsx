import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DataProvider } from '../Pages/ListPage';
// import '../Styles/Modal.css';
import styles from "../Styles/Modal.module.css"

function NewTaskModal() {
    const { item, setItem, list, setList, setIsOpen, isOpen } = useContext(DataProvider);

    const [nameError, setNameError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false)

    const updateList = () => {
         let newId = uuidv4()
        const newData = {
            ...item,
            id: newId,
          };

        if(newData.task_name && newData.task_description){
            setList((task) => {
                const updatedList = [...task, newData];
                localStorage.setItem('taskList', JSON.stringify(updatedList));
                return updatedList;
            })
            setItem({
                id: "",
                task_description: "",
                task_name: "",
                isChecked:false,
            })
            setIsOpen(false)
        }else if(newData.task_name){
            setNameError(false)
            setDescriptionError(true)
        } else if(newData.task_description){
            setNameError(true)
            setDescriptionError(false)
        }else{
            setNameError(true)
            setDescriptionError(true)
        }
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setItem({
            ...item,
            [name]: value,
            isChecked: false
        })

        if (name === "task_name") {
            setNameError(false)
        } else {
            setDescriptionError(false)
        }
    }

    const closeModal = () => {
        setItem({
            id: "",
            task_description: "",
            task_name: "",
            isChecked:false,
        })
        setIsOpen(false);
    };

    return (
        <div>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <span className={styles.closeButton} onClick={closeModal}>
                        &times;
                    </span>
                    <div className={styles.nameSection}>
                        <label>Task Name:-</label><br></br>
                        <input type="text" name="task_name" onInput={handleInput} value={item.task_name}></input><br></br>
                        {nameError?<div className={styles.errorDiv} ><i class="fa fa-exclamation-circle fa-blue" style={{color: "red"}} aria-hidden="true"></i> add name</div>:""}
                    </div>
                    <div className={styles.descriptionSection}>
                        <label>Task Description:-</label><br></br>
                        <textarea style={{ resize: 'none' }} maxLength={111} rows={6} column = {6} name="task_description" onInput={handleInput} value={item.task_description}></textarea><br></br>
                        {descriptionError?<div className={styles.errorDiv}><i class="fa fa-exclamation-circle" style={{color: "red"}} aria-hidden="true"></i> add description</div>:""}
                    </div>
                    <button className={styles.addTaskButton} onClick={updateList}>Add Task</button>
                </div>
            </div>
        </div>
    );
}

export default NewTaskModal
