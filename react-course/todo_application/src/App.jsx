import Nav from './components/Nav'
import AddTask from './components/AddTask'
import Home from './components/Home'
import CompletedTasks from './components/CompletedTasks'
import { TaskContext } from './context/TaskContexts'
import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  const [inProgressTasks,setInProgressTasks] = useState([]);
  const [completedTask, setCompletedTasks] = useState([]);
  return (
    <>

      
      <TaskContext.Provider value={{inProgressTasks,setInProgressTasks,completedTask,setCompletedTasks}}>
        <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='addTask' element={<AddTask/>}/>
            <Route path='completedTask' element={<CompletedTasks/>}/>
            <Route path="*" element={<>404 not found</>}/>
          </Routes>
        </BrowserRouter>
      </TaskContext.Provider>
    </>
  )
}

export default App
