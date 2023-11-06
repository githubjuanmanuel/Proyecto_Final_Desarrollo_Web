import React from "react";

const Task = ({ task, setTask, completeTask, deleteTask,editTask }) => {
  const { name, subject, deadLine, description, completed, id } = task;
  const handleDelete = (id, completed) => {
    const Confirm = confirm("¿Deseas eliminar la tarea?");
    if (Confirm) {
      deleteTask(id, completed);
    }
  };
  const handleEdit = (id, completed) => {
    const Confirm= confirm("¿Deseas editar la tarea?");
    if (Confirm) {
      const Alert = alert('Dirigete a nueva tarea')
      editTask(id, completed);
    }
  };
  return (
    <div className="task-container">
      <p className="p-task">
        Nombre: {""}
        <span>{name}</span>
      </p>
      <p className="p-task">
        Materia: {""}
        <span>{subject}</span>
      </p>
      <p className="p-task">
        Estado: {""}
        <span>{completed ? "Completada" : "Pendiente"}</span>
      </p>
      <p className="p-task">
        Fechad de entrega: {""}
        <span>{deadLine}</span>
      </p>
      <p className="p-task description">
        Descripción: {""}
        <span>{description}</span>
      </p>
      <div className="button-container">
        {task.completed === false && (
          <button
            type="button"
            className="button complete"
            onClick={() => completeTask(task.id)}
          >
            Completar
          </button>
        )}
        <button
          type="button"
          className="button edit"
          onClick={() => handleEdit(task.id, task.completed)}
        >
          Editar
        </button>
        <button
          type="button"
          className="button delete"
          onClick={() => handleDelete(task.id, task.completed)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Task;
