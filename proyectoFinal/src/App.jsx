import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/Home'
import NewTask from './routes/NewTask'
import ViewTasks from './routes/ViewTasks'
import Layout from './components/Layout'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/NewTask",
        element: <NewTask/>,
      },
      {
        path: "/ViewTasks",
        element: <ViewTasks/>,
      }
    ]
  }
  
]);

function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
