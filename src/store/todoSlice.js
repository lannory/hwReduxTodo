import { createSlice } from "@reduxjs/toolkit";


const initialState = [{value: 'test', id: 1}];

const todoSlice = createSlice({
	initialState,
	name: 'todo',
	reducers: {
		createNewTask: (state, action) =>{
			state.push(action.payload);
		}
	}
});

export  const {createNewTask} = todoSlice.actions;

export default todoSlice.reducer;