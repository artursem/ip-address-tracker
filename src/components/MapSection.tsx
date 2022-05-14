import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './styles/MapSection.module.css';

interface MapSectionProps {
	coords: [number, number];
	popup?: string;
}

const MapSection = ({ coords, popup }: MapSectionProps) => {
	console.log('rerender!');
	return (
		<section className={styles.leafletContainer}>
			<MapContainer center={coords} zoom={13} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={coords}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</section>
	);
};

export default MapSection;
