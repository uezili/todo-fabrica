import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import configureStore from 'redux-mock-store';
import { ToDoItem } from '.';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

describe('ToDoItem', () => {
	const todo = {
		id: 1,
		title: 'Sample Task',
		description: 'Sample Description',
		dueDate: '2023-09-30',
		priority: 'Alta',
		completed: false,
	};

	test('Renderiza detalhes da tarefa corretamente', () => {
		const store = mockStore({});
		const { getByText } = render(
			<Provider store={store}>
				<ToDoItem todo={todo} />
			</Provider>
		);
		expect(getByText('Sample Task')).toBeInTheDocument();
		expect(getByText('30/9/2023')).toBeInTheDocument();
		expect(getByText('Alta')).toBeInTheDocument();
	});

	test('Adiciona classe "completed" quando concluído é verdadeiro', () => {
		const completedTodo = { ...todo, completed: true };
		const store = mockStore({});
		const { container } = render(
			<Provider store={store}>
				<ToDoItem todo={completedTodo} />
			</Provider>
		);
		expect(container.firstChild).toHaveClass('completed');
	});
});
