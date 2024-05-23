import React, { useContext, useCallback } from 'react';
import { DataProvider } from '../Pages/ListPage';
import { useNavigate, Link } from 'react-router-dom';
import styles from "../Styles/List.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function List() {
    const { list, setList } = useContext(DataProvider);
    const navigate = useNavigate();

    const deleteItem = useCallback((id) => {
        setList(prevList => prevList.filter(item => item.id !== id));
    }, [setList]);

    const handleCheckboxChange = useCallback((id) => {
        setList(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, isChecked: !task.isChecked } : task
            )
        );
    }, [setList]);

    const handleNavigation = useCallback((id) => {
        navigate(`/details?taskid=${id}`);
    }, [navigate]);


    return (
        <ul className={styles.listcontainer}>
            {list.map((ele, key) => (
                <li
                    className={styles.listItem}
                    key={key}
                >
                    <label className={styles.labelClass}>
                        <input
                            type='checkbox'
                            name={ele.task_name + "checkbox"}
                            checked={ele.isChecked}
                            onChange={(e) => {
                                e.stopPropagation(); // Prevent navigating when clicking the checkbox
                                handleCheckboxChange(ele.id);
                            }}
                        />
                    </label>
                    <Link to={`/details?taskid=${ele.id}`} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <span className={ele.isChecked ? styles.checked : styles.unchecked}>
                        {ele.task_name}
                    </span>
                    </Link>

                    <div className={styles.buttonContainer}>
                        <button
                            className={styles.delButton}
                            value={ele.id}
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent navigating when clicking the delete button
                                deleteItem(ele.id);
                            }}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default List;
