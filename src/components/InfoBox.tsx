const InfoBox = () => {
	return (
		<div className='infobox'>
			<section className='infobox__section'>
				<h4 className='infobox__title'>ip address</h4>
				<div className='infobox__value'>192.217.174.101</div>
			</section>
			<section className='infobox__section'>
				<h4 className='infobox__title'>location</h4>
				<div className='infobox__value'>Brooklyn, NYC</div>
			</section>
			<section className='infobox__section'>
				<h4 className='infobox__title'>timezone</h4>
				<div className='infobox__value'>UTC -05:00</div>
			</section>
			<section className='infobox__section'>
				<h4 className='infobox__title'>isp</h4>
				<div className='infobox__value'>SpaceX Starlink</div>
			</section>
		</div>
	);
};

export default InfoBox;
