import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import configureStore from 'redux-mock-store';

import { ToDoForm } from '.';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);
describe("ToDoForm",() => {

	test('Renderizar o os campos do ToDoForm.', () => {
		const store = mockStore({});
		const { getByLabelText, getByText } = render(
			<Provider store={store}>
				<ToDoForm />
			</Provider>
		);
		expect(getByLabelText('Titulo:')).toBeInTheDocument();
		expect(getByLabelText('Descrição:')).toBeInTheDocument();
		expect(getByLabelText('Data:')).toBeInTheDocument();
		expect(getByText('Prioridade:')).toBeInTheDocument();
	});
	
	test('Verificar se os filtros estão vazios.', () => {
		const onSubmit = vi.fn();
		const store = mockStore({});
		const { getByLabelText, getByText } = render(
			<Provider store={store}>
				<ToDoForm onAfterSubmit={onSubmit}/>
			</Provider>
		);
		
		fireEvent.change(getByLabelText('Titulo:'), { target: { value: 'Sample Title' } });
		fireEvent.change(getByLabelText('Descrição:'), { target: { value: 'Sample Description' } });
		fireEvent.change(getByLabelText('Data:'), { target: { value: '2023-09-30' } });
		
		fireEvent.click(getByText('Add nova tarefa'));
		
		expect(getByLabelText('Titulo:').value).toBe('');
		expect(getByLabelText('Descrição:').value).toBe('');
		expect(getByLabelText('Data:').value).toBe('');
	
	});
})

