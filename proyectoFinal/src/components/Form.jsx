import { useState, useEffect } from "react";
import Error from "./Error"


const Form = ({task, setTask, tasks, setTasks}) => {


  
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [deadLine, setDeadLine] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState();

  const [error,setError] = useState(false);

  useEffect(()=>{
    if (Object.keys(task).length > 0){
      setName(task.name)
      setSubject(task.subject)
      setDeadLine(task.deadLine)
      setDescription(task.description)
      setCompleted(false);
    }
    
  }, [task]);


  const generarId = () => {
    const random= Math.random().toString(36);
    const fecha = Date.now().toString(36);

    return random + fecha
  }

  const handleSubmit = e => {
    e.preventDefault();

    //Validación del formulario
    if([name,subject,deadLine,description].includes('')){
      setError(true);
      return;
    }
    setError(false);

    const newTask = {
      name, subject, deadLine, description, completed
    }

    if (task.id) {
      //Editar la tarea
      newTask.id = task.id
      const taskUpdate = tasks.map(taskState => taskState.id === task.id ? newTask : taskState)
      setTasks(taskUpdate)
      setTask({})
    }else{
      //Nueva tarea
      newTask.id = generarId()
      setTasks([...tasks,newTask])

    }
    
    //Mensaje para confirmar el registro de la tarea y reinicio del formulario
    const tareaRegistrada = alert("Tarea registrada")
    setName("")
    setSubject("")
    setDeadLine("")
    setDescription("")
  } 

  return (
    <div>
      <form className="Task-form" onSubmit={handleSubmit}>
      {error && <Error mensaje='Todos los campos son obligatorios' />}
        <div className="form-box">
          <label htmlFor="TaskName">Nombre de la tarea</label>
          <input
            className="form-box-text"
            id="taskName"
            type="text"
            placeholder="Nombre de la tarea"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-box">
          <label htmlFor="subject">Clase</label>
          <input
            className="form-box-text"
            id="subject"
            type="text"
            placeholder="Ejm: Matematicas"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form-box">
          <label htmlFor="DeadLine">Fecha de Entrega</label>
          <input
            className="form-box-text"
            id="DeadLine"
            type="date"
            value={deadLine}
            onChange={(e) => setDeadLine(e.target.value)}
          />
        </div>
        <div className="form-box">
          <label htmlFor="TaskDecription">Descripción</label>
          <textarea
            className="form-box-textarea"
            id="TaskDecription"
            type="text"
            rows={5}
            cols={30}
            placeholder="Descripción de la tarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-box">
          <input
            className="form-box-submit"
            type="submit"
            value={task.id ? 'Editar tarea' : 'Agregar Tarea'}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
