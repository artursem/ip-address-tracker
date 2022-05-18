import { useAppSelector } from '../app/hooks';
import { selectSearchResult, selectStatus } from '../app/search-slice';
import { Status } from '../types/status';
import styles from './styles/InfoBox.module.css';
import Title from './Title';
import Value from './Value';

const InfoBox = () => {
	const { ipAddress, location, timezone, isp } = useAppSelector(selectSearchResult);
	const status = useAppSelector(selectStatus);

	const displayInfo = (
		<>
			{/* turn these into presentation components */}
			<section className={styles.section}>
				<Title>ip address</Title>
				<Value>{ipAddress}</Value>
			</section>
			<section className={styles.section}>
				<Title>location</Title>
				<Value>{location}</Value>
			</section>
			<section className={styles.section}>
				<Title>timezone</Title>
				<Value>{timezone}</Value>
			</section>
			<section className={styles.section}>
				<Title>isp</Title>
				<Value>{isp}</Value>
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
