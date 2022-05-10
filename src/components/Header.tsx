import InfoBox from './InfoBox';
import IPForm from './IPForm';
import styles from './styles/Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>IP Address Tracker</h1>
			<IPForm />
			<InfoBox />
		</header>
	);
};

export default Header;
