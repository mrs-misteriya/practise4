import { createSlice } from "@reduxjs/toolkit"


const filterTodo = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterTodos: (state, action) => {
            return action.payload}
}})


export const { filterTodos } = filterTodo.actions;

export default filterTodo.reducer;