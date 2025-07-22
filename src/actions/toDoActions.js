import { v4 as uuidv4 } from 'uuid';

export const addTodo = (title, description, dueDate, priority, status) => ({
	type: 'ADD_TODO',
	payload: {
		id: uuidv4(),
		title,
		description,
		dueDate,
		priority,
		status,
		completed: false,
	},
});

export const completeTodo = (id) => ({
	type: 'COMPLETE_TODO',
	payload: {
		id,
	},
});

export const deleteTodo = (id) => ({
	type: 'DELETE_TODO',
	payload: {
		id,
	},
});

export const updateTodo = (id, updatedTodo) => ({
	type: 'UPDATE_TODO',
	payload: {
		id,
		updatedTodo,
	},
});
