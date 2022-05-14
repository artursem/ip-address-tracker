import { useState, FormEvent, ChangeEvent } from 'react';
import { useAppDispatch } from '../app/hooks';
import { fetchDataByIp } from '../app/search-slice';
import Button from './Button';
import styles from './styles/IPForm.module.css';

const IPForm = () => {
	const dispatch = useAppDispatch();

	const [inputValue, setInputValue] = useState<string>('');
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.currentTarget.value);
	};
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		// console.log(inputValue);
		dispatch(fetchDataByIp(inputValue));
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
