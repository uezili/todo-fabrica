/* eslint-disable no-case-declarations */
const storage = localStorage.getItem('todos')
	? JSON.parse(localStorage.getItem('todos'))
	: [];

const initialState = {
	todos: storage,
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos: [...state.todos, action.payload],
			};

		case 'COMPLETE_TODO':
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id
						? { ...todo, completed: todo.status === 'Concluido' }
						: todo
				),
			};

		case 'DELETE_TODO':
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload.id),
			};

		case 'UPDATE_TODO':
			const { id, updatedTodo } = action.payload;
			const updatedTodos = state.todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, ...updatedTodo };
				}
				return todo;
			});

			return {
				...state,
				todos: updatedTodos,
			};

		default:
			return state;
	}
};

export default todoReducer;
