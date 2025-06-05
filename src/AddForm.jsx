import React, { useRef } from 'react';
import { useDispatch} from 'react-redux';
import { increase } from "./store/counterSlice";
import { createNewTask } from "./store/todoSlice";


function AddForm() {

	const dispatch = useDispatch()

	const taskRef = useRef();

	const handleSubmit = () =>{
		dispatch(createNewTask({value: taskRef.current.value, id: Date().now}));
		dispatch(increase());
	}

	return (
		<form>
			<input type="text" placeholder='new task' ref={taskRef}/>
			<button type='button' onClick={handleSubmit}>sumbit</button>
		</form>
	);
}

export default AddForm;