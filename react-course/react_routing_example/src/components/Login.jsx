import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userContext } from './UserContext';

function Login() {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {isLogged,setIsLogged} = useContext(userContext);
  const navigation = useNavigate();
    useEffect(()=>{
      if(isLogged){
        navigation('/home');
      }
    },[])

    
    const handleLogin = (e)=>{
        e.preventDefault();
        if(username=='admin' && password=='1234'){
            navigation('/home');
            setIsLogged(true);
        }else{
            alert("username or password is not valid")
            setPassword('');
        }

    }
  return (
    <>
     <form >

        <input type="text" placeholder='Enter username' value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
     </form>
    </>
  )
}

export default Login