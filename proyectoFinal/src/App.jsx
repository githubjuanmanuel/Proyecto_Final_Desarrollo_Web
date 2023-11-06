import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import NewTask from "./routes/NewTask";
import ViewTasks from "./routes/ViewTasks";
import Layout from "./components/Layout";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [completedTasks, setCompletedTasks] = useState([]);

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
              />
            }
          />
          <Route
            path="viewTasks"
            element={
              <ViewTasks
                task={task}
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
