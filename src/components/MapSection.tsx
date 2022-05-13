import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './styles/MapSection.module.css';

interface MapSectionProps {
	coords?: [number, number];
	popup?: string;
}

const MapSection = ({ coords, popup }: MapSectionProps) => {
	return (
		<section className={styles.leafletContainer}>
			<MapContainer center={[51.11, 17.036]} zoom={12}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={[51.11, 17.036]}>
					<Popup>
						TEXT : CUSTOMIZE THIS POPUP <br /> A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</section>
	);
};

export default MapSection;
