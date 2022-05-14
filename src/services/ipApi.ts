import ApiRespone, { Location } from '../types/apiResponse';
// https://geo.ipify.org/docs
// https://geo.ipify.org/api/v2/country?apiKey=at_rRtKoldKVlxAgV6im9T1atQtIAmM1&ipAddress=8.8.8.8

const key = process.env.REACT_APP_KEY;
export const url = `https://geo.ipify.org/api/v2/country?apiKey=${key}`;

export const fetchByIp = async (ipAddress: string) => {
	try {
		const response = await fetch(`${url}&ipAddress=${ipAddress}`);
		if (!response.ok) {
			throw new Error('Error fetching by ip');
		}
		const data = await response.json();
		const { ip, location, isp } = data;
		const displayLocation = (loc: Location) => {
			const display = [];
			if (loc.city !== undefined) {
				display.push(loc.city);
			}
			if (loc.region !== undefined) {
				display.push(loc.region);
			}
			if (loc.country !== undefined) {
				display.push(loc.country);
			}
			return display.join(', ');
		};
		const info: ApiRespone = {
			ipAddress: ip,
			location: displayLocation(location),
			timezone: location.timezone,
			isp,
			lat: location.lat,
			lng: location.lng,
		};
		console.log(info);
		return info;
	} catch (error: any) {
		return error.message;
	}
};
