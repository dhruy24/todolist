import React, { useEffect, useState } from 'react';
import {useLocation } from 'react-router-dom';

import styles from '../Styles/DetailPage.module.css'

const DetailsPage = () => {
  //const { taskid } = useParams();
  const location = useLocation();
  const [task, setTask] = useState(null);

  const getQueryParams = (query) => {
    return new URLSearchParams(query);
  };

  const queryParams = getQueryParams(location.search);
  const taskid = queryParams.get('taskid');
  console.log(taskid)

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('taskList')) || [];
    const foundTask = storedList.find(task => task.id === taskid);
    setTask(foundTask);
  }, [taskid]);

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div className={`${styles.container}`}>
      <h1>Task Details</h1>
      <p><strong>Task:</strong> {task.task_name}</p>
      <p><strong>Description:</strong> {task.task_description}</p>
    </div>
  );
};

export default DetailsPage;
