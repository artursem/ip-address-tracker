export default interface ApiRespone {
	ipAddress: string;
	location: string;
	timezone: string;
	isp: string;
	lat: number;
	lng: number;
}

export interface Location {
	country: string;
	region: string;
	city: string;
	lat: number;
	lng: number;
	postalCode: string;
	timezone: string;
	geonameId: number;
}

export type Coords = [number, number];
