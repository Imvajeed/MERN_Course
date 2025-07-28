import React, { useContext, useEffect } from 'react'
import { userContext } from './UserContext'
import { useNavigate } from 'react-router-dom';

function About() {
    const {isLogged,setIsLogged} = useContext(userContext);
    const navigationn = useNavigate();
    useEffect(()=>{
        if(!isLogged){
            navigationn('/login');
        }
    },[])
  return (
    <div>About</div>
  )
}

export default About