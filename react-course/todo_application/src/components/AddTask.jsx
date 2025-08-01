import React, { useContext, useState } from 'react'
import './addTask.css'
import { TaskContext } from '../context/TaskContexts';

function AddTask() {
    const [currentTask,setCurrentTask] = useState('');
    const [currentDescription,setCurrentDescription] = useState('');
    const {inProgressTasks,setInProgressTasks} = useContext(TaskContext)

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(currentTask && currentDescription){
            setInProgressTasks([...inProgressTasks,{task:currentTask,description:currentDescription}]
            );
            setCurrentTask('');
            setCurrentDescription('');
            alert('task addded');
        }else{
            alert('something went wrong check task name and description')
        }

    }
    return (
        <>
            <div className="addTask">
                
                <form >
                    <h3>Add Task</h3>
                    <div>
                        <label htmlFor="title">Task Title</label>
                        <input type="text" name='title' className='titleInput' value={currentTask}  onChange={(e)=>setCurrentTask(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="taskDesc">Add Description: </label>
                        <textarea name="taskDesc" id="taskDesc" value={currentDescription} onChange={(e)=>setCurrentDescription(e.target.value)}></textarea>
                    </div>
                    <div>
                        <button onClick={handleSubmit}>Add Task</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddTask