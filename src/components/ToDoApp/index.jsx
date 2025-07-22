import { useSelector } from 'react-redux';
import { Header } from '../Header';
import { ToDoList } from '../ToDoList';

import './styles.css';
import { ModalForm } from '../Modals/ModalForm';
import { useEffect } from 'react';

export const ToDoApp = () => {
	const todos = useSelector((state) => state.todos);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<div>
			<Header />
			<ModalForm />
			<div className="w-3/4 my-0 mx-auto">
				{todos.length > 0 && <ToDoList todos={todos} />}
			</div>
		</div>
	);
};
