import { useState, FormEvent, ChangeEvent } from 'react';
import Button from './Button';
import styles from './styles/IPForm.module.css';

const IPForm = () => {
	const [inputValue, setInputValue] = useState<string>('');
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.currentTarget.value);
	};
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		console.log(inputValue);
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				id='ipInput'
				className={styles.input}
				placeholder='Search for and IP address or domain'
				value={inputValue}
				onChange={handleChange}
			/>
			<Button />
		</form>
	);
};

export default IPForm;
