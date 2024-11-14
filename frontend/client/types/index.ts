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
	offeredAmenities: string[];
	isFeatured: boolean;
};
