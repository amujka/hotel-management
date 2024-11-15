export type User = {
	id: string;
	isAdmin: boolean;
};

export type AuthTokens = {
	accessToken: string;
};

export type Amenity = {
	id: string;
	name: string;
	icon: string;
};

export type Room = {
	_id: string;
	type: string;
	name: string;
	description: string;
	slug: string;
	price: number;
	specialNote: string;
	dimension: number;
	numberOfBeds: number;
	offeredAmenities: Amenity[];
	isFeatured: boolean;
};
