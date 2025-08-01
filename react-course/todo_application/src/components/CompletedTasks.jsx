import React, { useContext } from 'react'
import './completed.css'
import { TaskContext } from '../context/TaskContexts'
function CompletedTasks() {
  const {completedTask, setCompletedTasks} = useContext(TaskContext);


  const deleteTask = (indexToDelete) =>{
    setCompletedTasks((prev)=>
      prev.filter((_,index) =>index!== indexToDelete)
    )
  }
  return (
    <>
    <div className="completedTasks">
        <table className="completedTask">
            <tr>
                <th>Sl no.</th>
                <th>Task Name</th>
                <th>Description</th>
                <th>Status</th>
                <th></th>
            </tr>
            {
              completedTask.map((ele,index)=>(
                <tr>
                <td>{index+1}</td>
                <td>{ele.task}</td>
                <td>{ele.description}</td>
                <td>Completed</td>
                <td><button className='deleteBtn' onClick={()=>deleteTask(index)}>Delete</button></td>
            </tr>
              ))
            }
        </table>
    </div>
    </>
  )
}

export default CompletedTasks