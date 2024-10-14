import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddForm() {
    const [task, settask] = useState('');
    const dispatch = useDispatch();

    const handlesubmit = (e)=>{
        e.preventDefault();  
        if(task.length > 0 ){
            dispatch(addTodo(task)); //for multiple payloads, pass them in an array in order
            alert(`Task added: ${task.toUpperCase()}`);
            settask('');
        }else{
            alert("Task cannot be empty");
        }
    }
  return (
    <>
        <form onSubmit={(e)=>handlesubmit(e)}> 
            <input type="text" placeholder="Add task" value={task} onChange={(e)=>settask(e.target.value)}/>
            <button>Add task</button>
        </form>
    </>
  )
}

export default AddForm
