// https://geo.ipify.org/docs
// https://geo.ipify.org/api/v2/country?apiKey=at_rRtKoldKVlxAgV6im9T1atQtIAmM1&ipAddress=8.8.8.8
// export const key = 'at_rRtKoldKVlxAgV6im9T1atQtIAmM1';
const key = process.env.REACT_APP_KEY;
export const url = `https://geo.ipify.org/api/v2/country?apiKey=${key}`;

export const fetchByIp = async (ipAddress: string) => {
	try {
		const response = await fetch(`${url}&ipAddress=${ipAddress}`);
		if (!response.ok) {
			throw new Error('Error fetching by ip');
		}
		const data = await response.json();
		return data.location;
	} catch (error: any) {
		return error.message;
	}
};
