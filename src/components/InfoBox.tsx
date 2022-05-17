import { useAppSelector } from '../app/hooks';
import { selectSearchResult, selectStatus } from '../app/search-slice';
import { Status } from '../types/status';
import styles from './styles/InfoBox.module.css';
import Title from './Title';

const InfoBox = () => {
	const { ipAddress, location, timezone, isp } = useAppSelector(selectSearchResult);
	const status = useAppSelector(selectStatus);

	const displayInfo = (
		<>
			{/* turn these into presentation components */}
			<section className={styles.section}>
				<Title>ip address</Title>
				<div className={styles.value}>{ipAddress}</div>
			</section>
			<section className={styles.section}>
				<h4 className={styles.title}>location</h4>
				<div className={styles.value}>{location}</div>
			</section>
			<section className={styles.section}>
				<h4 className={styles.title}>timezone</h4>
				<div className={styles.value}>{timezone}</div>
			</section>
			<section className={styles.section}>
				<h4 className={styles.title}>isp</h4>
				<div className={styles.value}>{isp}</div>
			</section>
		</>
	);
	return (
		<div className={styles.infobox}>
			{status === Status.idle && displayInfo}
			{status === Status.failed && <p className={styles.title}>Error fetching data</p>}
			{status === Status.loading && <p className={styles.title}>Loading...</p>}
		</div>
	);
};

export default InfoBox;
// 192.217.174.101
