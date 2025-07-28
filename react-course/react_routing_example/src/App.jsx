import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Nav from "./components/Nav"

import {userContext} from './components/UserContext'
import { useState } from "react"


function App() {
  const [isLogged,setIsLogged] = useState(false)
  return(
    <BrowserRouter>
    

    
    <userContext.Provider value={{isLogged,setIsLogged}}>
      <Nav/>
      <Routes>
        
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
       
      </Routes>
       </userContext.Provider>
    </BrowserRouter>
  )
}

export default App
