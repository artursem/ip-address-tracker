import Button from './Button';
import styles from './styles/IPForm.module.css';

const IPForm = () => {
	return (
		<form>
			<input
				type='text'
				id='ipInput'
				className={styles.input}
				placeholder='Search for and IP address or domain'
			/>
			<Button />
		</form>
	);
};

export default IPForm;
