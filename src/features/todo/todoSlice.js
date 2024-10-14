// reducers

import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos : [{id:"1", task:"grind", isdone:false}]
};

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers: {
        addTodo : (state, action) => {
            const newTodo = {
                id : nanoid(),
                task : action.payload,
                isdone : false
            }
            state.todos.push(newTodo); //direct mutation of the array
        },
        markasDone : (state, action) => {
            state.todos.forEach((todo)=>{
                if(todo.id === action.payload) {
                    todo.isdone = !todo.isdone;
                } 
            });
        },
        deleteTodo : (state, action) => {
            //action.payload
            state.todos = state.todos.filter(t => t.id!== action.payload);
        }
    }
});

export default todoSlice.reducer;
export const {addTodo, markasDone, deleteTodo} = todoSlice.actions;