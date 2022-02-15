import { screen, render } from '@testing-library/react';
import Header from '../Header';

describe('Header displays', () => {
	test('heading', () => {
		render(<Header />);
		const heading = screen.getByRole('heading', {
			name: /ip address tracker/i,
		});
		expect(heading).toBeInTheDocument();
	});
	test('input field', () => {
		render(<Header />);
		const input = screen.getByRole('textbox', { label: 'ipInput' });
		expect(input).toBeInTheDocument();
	});
});
