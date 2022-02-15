import React from 'react';
import InfoBox from './InfoBox';
import IPForm from './IPForm';

const Header = () => {
	return (
		<header className='header'>
			<h1 className='header__title'>IP Address Tracker</h1>
			<IPForm />
			<InfoBox />
		</header>
	);
};

export default Header;
