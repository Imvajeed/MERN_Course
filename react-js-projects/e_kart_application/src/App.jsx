import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import UserCart from './pages/UserCart'
import UserProfile from './pages/UserProfile'
import Nav from './components/Nav'
import { useState } from 'react'
import store from './store/EkartStore'

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(store.getState().user.isLoggedIn);

  store.subscribe(()=>{
    setIsLoggedIn(store.getState().user.isLoggedIn);
  })
  return (
    <>
    <BrowserRouter>
    {isLoggedIn&&<Nav/>}
      <Routes>
        <Route path='/' element={isLoggedIn?<Home/>:<Login/>}/>
        <Route path='/home' element={isLoggedIn?<Home/>:<Login/>}/>
        <Route path='/login' element={isLoggedIn?<Home/>:<Login/>}/>
        <Route path='/cart' element={isLoggedIn?<UserCart/>:<Login/>}/>
        <Route path='/my-profile' element={isLoggedIn?<UserProfile/>:<Login/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
