import React from 'react'
import { useSelector } from 'react-redux'
import AddForm from './AddForm';
import { useDispatch } from 'react-redux';
import { deleteTodo, markasDone } from '../features/todo/todoSlice';

function Todo() {
    const todos = useSelector((state) => state.todos)
    console.log(todos);
    const dispatch = useDispatch();

    const handledelete = (id) => {
        dispatch(deleteTodo(id));
    }

    const handleisdone = (task, id, isdone, donetodo) => {
        dispatch(markasDone(id));
        if(!isdone){
            donetodo.style.textDecoration = 'line-through';
            alert(`Task : ${task.toUpperCase()} marked as done`);
        }else{
            donetodo.style.textDecoration = 'none';
            alert(`Do you want the task : ${task.toUpperCase()} to be marked as undone`);
        }
    }

  return (
    <>
        <h2>Todo List App</h2>
        <AddForm />
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} >{todo.task} &nbsp;&nbsp;
                    <input type='checkbox' value={todo.isdone} onChange={(e)=>handleisdone(todo.task, todo.id, todo.isdone, e.target.parentElement)} />
                    <button onClick={()=>handledelete(todo.id)}>DELETE</button>
                </li>
            ))}
        </ul>
    </>
  )
}

export default Todo
