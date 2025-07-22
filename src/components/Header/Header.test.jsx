import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Header } from '.';
import { describe, expect, test } from 'vitest';

describe('Header component', () => {
	test('Renderizar o componente header', () => {
		const { getByText } = render(<Header />);

		expect(getByText('To-Do Fábrica')).toBe;
	});
	
	test('Renderizar o componente header com a classe title', () => {
		const { container } = render(<Header />);
		const titleElement = container.querySelector('.title');

		expect(titleElement).toBeInTheDocument();
	});
});
