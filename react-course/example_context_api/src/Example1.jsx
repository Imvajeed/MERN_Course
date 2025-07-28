import { useContext } from "react";
import { ProjectContex } from "./App";



function Example1 (){
 const {user} = useContext(ProjectContex);

    return <>{
        user.map((element,index)=>(
            <p>{element}</p>
        ))
    }
    
    </>
}


export default Example1;