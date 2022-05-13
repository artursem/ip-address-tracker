import styles from './styles/InfoBox.module.css';

const InfoBox = () => {
	console.log(process.env.REACT_APP_KEY);
	return (
		<div className={styles.infobox}>
			<section className={styles.section}>
				<h4 className={styles.title}>ip address</h4>
				<div className={styles.value}>192.217.174.101</div>
			</section>
			<section className={styles.section}>
				<h4 className={styles.title}>location</h4>
				<div className={styles.value}>Brooklyn, NYC</div>
			</section>
			<section className={styles.section}>
				<h4 className={styles.title}>timezone</h4>
				<div className={styles.value}>UTC -05:00</div>
			</section>
			<section className={styles.section}>
				<h4 className={styles.title}>isp</h4>
				<div className={styles.value}>SpaceX Starlink</div>
			</section>
		</div>
	);
};

export default InfoBox;
