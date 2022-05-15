import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import { Icon } from 'leaflet';
import styles from './styles/MapSection.module.css';
import { Coords } from '../types/apiResponse';

interface MapSectionProps {
	coords: Coords;
	popup?: string;
}

const blackMarker = new Icon({
	iconUrl: '/icon-location.svg',
	iconSize: [35, 45],
});

const MapSection = ({ coords, popup }: MapSectionProps) => {
	function SetViewOnLoad() {
		const map = useMapEvent('click', (e) => {
			map.setView(e.latlng, map.getZoom());
		});

		return null;
	}
	return (
		<section className={styles.leafletContainer}>
			<MapContainer center={coords} zoom={13} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={coords} icon={blackMarker}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
				<SetViewOnLoad />
			</MapContainer>
		</section>
	);
};

export default MapSection;
