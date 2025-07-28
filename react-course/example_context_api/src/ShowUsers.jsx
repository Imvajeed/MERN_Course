import { useContext } from "react";
import { ProjectContex } from "./App";
import Example1 from "./Example1";


function ShowUsers() {
    const {user} = useContext(ProjectContex)
    return (
        <>
        {
            user.map((element,index)=>(
                <h3 key={index}>{element}</h3>
            ))
        }
        <Example1/>
        </>
    )
}

export default ShowUsers;