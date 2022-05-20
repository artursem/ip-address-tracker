import { useAppSelector } from './app/hooks';
import { selectSearchResult } from './app/search-slice';

import Header from './components/Header';
import MapSection from './components/MapSection';
import './App.css';

function App() {
	const { lat, lng, isp, location } = useAppSelector(selectSearchResult);
	return (
		<>
			<Header />
			<MapSection coords={[lat, lng]} isp={isp} location={location} />
		</>
	);
}

export default App;
