import { screen, render } from '@testing-library/react';
import InfoBox from '../InfoBox';

test('infobox displays all headings', () => {
	render(<InfoBox />);
	const headings = screen.getAllByRole('heading');
	expect(headings.map((h) => h.textContent)).toMatchObject([
		'ip address',
		'location',
		'timezone',
		'isp',
	]);
});
test('infobox displays all values', async () => {});
