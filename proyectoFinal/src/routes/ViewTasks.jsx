import React from 'react'
import Task from '../components/Task'


const ViewTasks = ({tasks,setTask}) => {
  return (
    <div className='container viewtasks'>
        <div className='box'>
            <h2 className='title'>Ver tareas pendientes</h2>
        </div>
        <div className='box'>
            <h2 className='title'>Ver tareas completadas</h2>
        </div>
    </div>
  )
}

export default ViewTasks