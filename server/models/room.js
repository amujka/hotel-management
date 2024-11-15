import { Schema, model } from 'mongoose';

const roomSchema = new Schema({
	name: { type: String, required: [true, 'Name is required'], unique: true },
	slug: { type: String, required: [true, 'Slug is required'], unique: true },
	type: { type: String, required: true },
	numberOfBeds: {
		type: Number,
		min: [1, 'Minimum is 1'],
		required: [true, 'Number of beds is required'],
	},
	price: {
		type: Number,
		min: [1, 'Minimum is 1'],
		required: [true, 'Price is required'],
	},
	dimension: {
		type: Number,
		min: [1, 'Minimum is 1'],
		required: [true, 'Dimension is required'],
	},
	description: { type: String, required: [true, 'Description is required'] },
	specialNote: { type: String },
	offeredAmenities: { type: [{ id: String, name: String, icon: String }] },
	isFeatured: { type: Boolean },
});

const Room = model('Room', roomSchema);

export default Room;
