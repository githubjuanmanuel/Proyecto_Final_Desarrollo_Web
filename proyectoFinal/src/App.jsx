import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import NewTask from "./routes/NewTask";
import ViewTasks from "./routes/ViewTasks";
import Layout from "./components/Layout";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );
  const [task, setTask] = useState({});
  const [completedTasks, setCompletedTasks] = useState(
    JSON.parse(localStorage.getItem('completedTasks')) || []
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  console.log(localStorage);
  useEffect(() => {
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="newTask"
            element={
              <NewTask
                task={task}
                setTask={setTask}
                tasks={tasks}
                setTasks={setTasks}
                completedTasks={completedTasks}
                setCompletedTasks={setCompletedTasks}
              />
            }
          />
          <Route
            path="viewTasks"
            element={
              <ViewTasks
                setTask={setTask}
                tasks={tasks}
                setTasks={setTasks}
                completedTasks={completedTasks}
                setCompletedTasks={setCompletedTasks}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
