import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

test('renders learn react link', () => {
	render(
		<Provider store={store}>
			<App />
		</Provider>
	);
	const header = screen.getByText(/learn/i);
	expect(header).toBeInTheDocument();
});
