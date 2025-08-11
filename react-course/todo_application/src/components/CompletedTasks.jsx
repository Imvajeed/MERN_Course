import React, { useContext, useState } from 'react'
import './completed.css'
import { useDispatch, useStore } from 'react-redux';
import taskStore from '../store/TaskStore';
import { removeTask } from '../store/TaskSlice';

function CompletedTasks() {
  const dispatch = useDispatch();
  const store = useStore(taskStore);
  const [completedTask,setCompletedTask] = useState(store.getState().task.values);

  store.subscribe(()=>{
    setCompletedTask(store.getState().task.values);
  })



  const deleteTask = (indexToDelete) =>{
    dispatch(removeTask(indexToDelete));
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
                ele.completed&&<tr>
                <td>{ele.id}</td>
                <td>{ele.taskName}</td>
                <td>{ele.description}</td>
                <td>Completed</td>
                <td><button className='deleteBtn' onClick={()=>deleteTask(ele.id)}>Delete</button></td>
              </tr>
              ))
            }
        </table>
    </div>
    </>
  )
}

export default CompletedTasks