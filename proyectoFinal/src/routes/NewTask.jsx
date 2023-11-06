import React, { useState } from 'react'
import Form from '../components/Form'



const NewTask = ({ task, setTask, tasks, setTasks}) => {
  return (
    <div className='container'>
        <h2 className='title title-NewTask'>Añade una nueva tarea</h2>
        <Form
          task={task}
          setTask={setTask}
          tasks={tasks}
          setTasks={setTasks}
        />
    </div>
  )
}

export default NewTask