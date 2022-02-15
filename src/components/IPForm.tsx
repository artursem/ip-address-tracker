import React from 'react';
import Button from './Button';

const IPForm = () => {
	return (
		<form>
			<input
				type='text'
				id='ipInput'
				className='header__input'
				placeholder='Search for and IP address or domain'
			/>
			<Button />
		</form>
	);
};

export default IPForm;
