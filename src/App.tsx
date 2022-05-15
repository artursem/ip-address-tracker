import { useAppSelector } from './app/hooks';
import { selectSearchResult, selectStatus } from './app/search-slice';

import Header from './components/Header';
import MapSection from './components/MapSection';
import './App.css';

function App() {
	const { lat, lng, isp } = useAppSelector(selectSearchResult);
	return (
		<>
			<Header />
			<MapSection coords={[lat, lng]} popup={isp} />
		</>
	);
}

export default App;
