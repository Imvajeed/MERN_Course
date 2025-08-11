import Nav from './components/Nav'
import AddTask from './components/AddTask'
import Home from './components/Home'
import CompletedTasks from './components/CompletedTasks'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  
  return (
    <>

      
      
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
     
    </>
  )
}

export default App
