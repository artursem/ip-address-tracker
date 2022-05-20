import { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import { LatLngBoundsExpression } from 'leaflet';
import { LatLng, Icon } from 'leaflet';
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
	function SetViewOnLoad({ animateRef }: any) {
		const map = useMap();
		map.setView(new LatLng(...coords), map.getZoom(), {
			animate: animateRef.current || false,
		});
		return null;
	}
	const animateRef = useRef(false);
	return (
		<section className={styles.leafletContainer}>
			<MapContainer center={coords} zoom={13} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={coords} icon={blackMarker}>
					<Popup>
						<h4>{popup}</h4>
					</Popup>
				</Marker>
				<SetViewOnLoad animateRef={animateRef} />
			</MapContainer>
		</section>
	);
};

export default MapSection;
