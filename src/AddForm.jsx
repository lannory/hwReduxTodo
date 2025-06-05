import React from 'react';
import { useDispatch} from 'react-redux';
import { increase } from "./store/counterSlice";
import { createNewTask } from "./store/todoSlice";


function AddForm() {

	const dispatch = useDispatch()

	let taskValue;

	const handleSubmit = () =>{
		dispatch(createNewTask({value: taskValue, id: Date().now}));
		dispatch(increase());
	}

	const handleChange = (value) =>{
		taskValue = value;
	}

	return (
		<form>
			<input type="text" placeholder='new task' onChange={e => handleChange(e.target.value)}/>
			<button type='button' onClick={handleSubmit}>sumbit</button>
		</form>
	);
}

export default AddForm;