import React, { useState } from 'react'
import Form from '../components/Form'



const NewTask = ({ task, setTask, tasks, setTasks,completedTasks,setCompletedTasks}) => {
  return (
    <div className='container'>
        <h2 className='title title-NewTask'>Añade una nueva tarea</h2>
        <Form
          task={task}
          setTask={setTask}
          tasks={tasks}
          setTasks={setTasks}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
        />
    </div>
  )
}

export default NewTask