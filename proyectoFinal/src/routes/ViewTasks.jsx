import React, { useEffect, useState } from "react";
import Task from "../components/Task";

const ViewTasks = ({
  setTask,
  tasks,
  setTasks,
  completedTasks,
  setCompletedTasks,
}) => {
  const completeTask = (id) => {
    let newCompletedTask;

    for (const task of tasks) {
      if (task.id === id) {
        newCompletedTask = task;
        newCompletedTask.completed = true;
      }
    }
    const newUncompletedTasks = tasks.filter((task) => {
      return task.id != id;
    });
    setTasks(newUncompletedTasks);
    setCompletedTasks([...completedTasks, newCompletedTask]);
  };

  const deleteTask = (id,completed) => {
    if (completed) {
      const newCompletedTasks = completedTasks.filter((task) => {
      return task.id != id;
      });
      console.log(newCompletedTasks)
      setCompletedTasks(newCompletedTasks);
    }else{
      const newUncompletedTasks = tasks.filter((task) => {
        return task.id != id;
      });
      setTasks(newUncompletedTasks);
    }
  }

  const editTask = (id,completed) => {
    if (completed) {
      for (const task of completedTasks) {
        if (task.id === id) {
          setTask(task)
        }
      }
    } else {
      for (const task of tasks) {
        if (task.id === id) {
          setTask(task)
        }
      }
    }
  }


  
  return (
    <div className="container viewtasks">
      <div className="box ">
        <h2 className="title">Ver tareas pendientes</h2>
        <div className="tasks-container">
          {tasks.length > 0 ? (
            <>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  setTask={setTask}
                  completeTask={completeTask}
                  deleteTask={deleteTask}
                  editTask={editTask}
                />
              ))}
            </>
          ) : (
            <p className="no-tasks">Aun no hay tareas</p>
          )}
        </div>
      </div>
      <div className="box">
        <h2 className="title">Ver tareas completadas</h2>
        <div className="tasks-container">
          {completedTasks.length === 0 ? (
            <p className="no-tasks">Aun no hay tareas</p>
          ) : (
            <>
              {completedTasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  setTask={setTask}
                  completeTask={completeTask}
                  deleteTask={deleteTask}
                  editTask={editTask}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewTasks;
