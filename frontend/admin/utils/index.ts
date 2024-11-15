import type { Amenity } from '~/types';

export const slugifyName = (str: string) => {
	return String(str)
		.normalize('NFKD') // split accented characters into their base characters and diacritical marks
		.replace(/[\u0300-\u036F]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
		.trim() // trim leading or trailing whitespace
		.toLowerCase() // convert to lowercase
		.replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
		.replace(/\s+/g, '-') // replace spaces with hyphens
		.replace(/-+/g, '-'); // remove consecutive hyphens
};

export const AMENITIES: Amenity[] = [
	{ id: '1', name: 'kitchen', icon: 'oven-gen' },
	{ id: '2', name: 'tv', icon: 'connected-tv' },
	{ id: '3', name: 'wifi', icon: 'network-wifi' },
	{ id: '4', name: 'washer', icon: 'dishwasher-gen' },
	{ id: '5', name: 'bathroom', icon: 'bathtub' },
	{ id: '6', name: 'breakfast', icon: 'fork-spoon' },
	{ id: '7', name: 'coffee', icon: 'coffee-maker' },
	{ id: '8', name: 'reserved parking', icon: 'local-parking' },
	{ id: '9', name: 'gym', icon: 'exercise' },
	{ id: '10', name: 'minibar', icon: 'local-bar' },
	{ id: '11', name: 'private pool', icon: 'pool' },
	{ id: '12', name: 'AC unit', icon: 'ac-unit' },
];
