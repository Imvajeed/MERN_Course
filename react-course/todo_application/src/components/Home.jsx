import React, { useContext } from 'react'
import './home.css'
import { TaskContext } from '../context/TaskContexts'
function Home() {
    const { inProgressTasks, setInProgressTasks,completedTask, setCompletedTasks } = useContext(TaskContext);


    const updateStatus =(indexToRemove)=>{
        setCompletedTasks([...completedTask,inProgressTasks[indexToRemove]]);
        setInProgressTasks((prevElements)=>prevElements.filter((_,index)=>index!==indexToRemove))
        console.log(inProgressTasks);
    }
    const deleteTask = (indexToRemove)=>{
        setInProgressTasks((prevElements)=>prevElements.filter((_,index)=>index!==indexToRemove))
    }
    return (
        <>
            <div className="allTasks">
                <table className='taskTable'>
                    <tr>
                        <th>sl no.</th>
                        <th>Task Name</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th></th>
                    </tr>

                    {
                        inProgressTasks.map((element, index) => (
                            <tr>
                                <td>{index+1}</td>
                                <td>{element.task}</td>
                                <td>{element.description}</td>
                                <td><input type="checkbox" onChange={()=>updateStatus(index)} /></td>
                                <td><button className='deleteBtn' onClick={()=>deleteTask(index)}>Delete</button></td>
                            </tr>
                        ))
                    }

                </table>
            </div>
        </>
    )
}

export default Home