import { createContext, useState } from "react"
import ShowUsers from "./ShowUsers";


export const ProjectContex = createContext(null);

function App() {
  const [user,setUser] = useState([]);
  const [currentUser,setCurrentUser] = useState("");

  const handleClick = ()=>{
    setUser([...user,currentUser]);
    setCurrentUser("");
  }

  return(
    <>
      <ProjectContex.Provider value={{user,setUser}}>
        <div>
          <input type="text" value={currentUser} onChange={(e)=>setCurrentUser(e.target.value)} />
          <button onClick={handleClick}>ADD</button>
        </div>

        <ShowUsers/>

      </ProjectContex.Provider>

    </>
  )
}

export default App
