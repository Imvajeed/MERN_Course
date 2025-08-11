import React, { useContext, useState } from 'react'
import './home.css'
import { useDispatch, useStore } from 'react-redux'
import { addTask,removeTask,completeTask } from '../store/TaskSlice';
import taskStore from '../store/TaskStore';
function Home() {
    const dispatch = useDispatch();
    const taskStoreState = useStore(taskStore);
    const [inProgressTasks,setInProgressTasks] =useState(taskStoreState.getState().task.values)
    
    taskStoreState.subscribe(()=>{
        setInProgressTasks(taskStoreState.getState().task.values)
        console.log(taskStoreState.getState().task.values);
    })

    
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
                            !element.completed&&<tr>
                                <td>{element.id}</td>
                                <td>{element.taskName}</td>
                                <td>{element.description}</td>
                                <td><input type="checkbox" onChange={()=>dispatch(completeTask(element.id))} /></td>
                                <td><button className='deleteBtn' onClick={()=>dispatch(removeTask(element.id))}>Delete</button></td>
                            </tr>
                        ))
                    }

                </table>
            </div>
        </>
    )
}

export default Home