import { useSelector } from 'react-redux';
import { ToDoItem } from '../ToDoItem';
import './styles.css';
import { useState } from 'react';
import { ToDoFilter } from '../ToDoFilter';

export const ToDoList = () => {
	const todo = useSelector((state) => state.todos);
  const [filteredTodos, setFilteredTodos] = useState(todo);

		const handleFilterChange = filters => {
			const filtered = todo.filter(todo => {
				if (filters.priority !== 'Todas' && todo.priority !== filters.priority) {
					return false;
				}
				if (filters.status !== 'Todas' && todo.status !== filters.status) {
					return false;
				}
				return true; 
			}).sort((a, b) => {
					if (a.status === 'Concluido' && b.status !== 'Concluido') return 1;
					if (a.status !== 'Concluido' && b.status === 'Concluido') return -1;
					if (
						(a.status === 'Em Andamento' && b.status !== 'Em andamento') ||
						(a.status === 'Aguardando' && b.status !== 'Aguardando')
					)
						return 0;
			})
			setFilteredTodos(filtered)
		};

	return (
		<div className="todo-list">
			<ToDoFilter onFilterChange={handleFilterChange}/>
			<div className="list-items grid grid-cols-3 gap-x-3">
				{filteredTodos.map((todo) => (
					<ToDoItem key={todo.id} todo={todo} />
				))}
			</div>
		</div>
	);
};
