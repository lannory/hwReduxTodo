import {useSelector} from 'react-redux';



export default function TodoList (){
	const todo = useSelector(state => state.todo);

	return <ul>
		{todo.map(item => <li key={item.id}>{item.value}</li>)}
	</ul>
}