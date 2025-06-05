import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

const counterSlice = createSlice({
	initialState,
	name: 'counter',
	reducers: {
		increase: (state, action) => {
			state++;
			return state;
		}
	}
});


export const {increase} = counterSlice.actions;

export default counterSlice.reducer;