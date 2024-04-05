import { Schema, model } from 'mongoose';

const roomSchema = new Schema({
	name: { type: String, required: true },
	slug: { type: String, required: true },
	type: { type: String, required: true },
	numberOfBeds: { type: Number, required: true },
	price: { type: Number, required: true },
	dimension: { type: Number, required: true },
	description: { type: String, required: true },
	specialNote: { type: String, required: true },
	offeredAmenities: { type: [String] },
	isFeatured: { type: Boolean },
});

const Room = model('Room', roomSchema);

export default Room;
