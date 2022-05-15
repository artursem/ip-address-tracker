import ApiRespone, { Location } from '../types/apiResponse';
import { isIP } from 'is-ip';
const key = process.env.REACT_APP_KEY;
export const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${key}`;

// const isIpAddress = (str: string) => {
// 	const isLengthOK = str.split('.').length === 4;
// 	const isNumbers = str.split('.').every((part) => !isNaN(parseInt(part)));
// 	console.log(isLengthOK);
// 	console.log(isNumbers);
// 	return isLengthOK && isNumbers;
// };

export const fetchByIp = async (query: string) => {
	try {
		const searchBy = isIP(query) ? 'ipAddress' : 'domain';
		console.log(searchBy);
		const response = await fetch(`${url}&${searchBy}=${query}`);
		if (!response.ok) {
			throw new Error('Error fetching by ip');
		}
		const data = await response.json();
		console.log(data);
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
			lng: data.location.lng,
			lat: data.location.lat,
		};
		console.log(info);
		return info;
	} catch (error: any) {
		return error.message;
	}
};

// https://geo.ipify.org/docs
// https://geo.ipify.org/api/v2/country?apiKey=at_rRtKoldKVlxAgV6im9T1atQtIAmM1&ipAddress=8.8.8.8
