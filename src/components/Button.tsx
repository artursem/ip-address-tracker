import IconArrow from './IconArrow';
import styles from './styles/Button.module.css';

const Button = () => {
	return (
		<button type='submit' className={styles.button}>
			<IconArrow />
		</button>
	);
};

export default Button;
