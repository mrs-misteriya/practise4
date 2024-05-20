import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        currentTodo: null,
     },
    reducers: {
        addTodos: (state, action) => {
        state.items.push(action.payload)
        },
        deleteTodos: (state, action) => {
        state.items = state.items.filter(task => task.id !== action.payload);
        },
        changeTodo: (state, action) => {
        state.currentTodo = action.payload
        },
        editTodo: (state, action) => {
            state.items = state.items.map((item) => { return item.id === state.currentTodo.id ? {text: action.payload, id: state.currentTodo.id} : item })
            
        }
    }
})


export const { addTodos, deleteTodos, changeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;