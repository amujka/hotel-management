import Room from '../models/room.js';

// handle errors
const handleErrors = (err) => {
	const errors = {};
	if (err.errors) {
		Object.values(err.errors).forEach((error) => {
			errors[error.properties.path] = error.properties.message;
		});
	}
	return errors;
};

export const getRooms = async (req, res) => {
	const rooms = await Room.find({});
	res.status(200).json({ rooms });
};

export const getRoom = async (req, res) => {
	try {
		const { id } = req.params;
		const room = await Room.findById(id);
		res.status(200).json(room);
	} catch (error) {
		res.status(400).json(error);
	}
};

export const addNewRoom = async (req, res) => {
	try {
		const newRoom = await Room.create(req.body);
		res.status(200).json({ newRoom });
	} catch (error) {
		const errors = handleErrors(error);
		res.status(400).json(errors);
	}
};

export const deleteRoomById = async (req, res) => {
	try {
		const { _id } = req.body;
		await Room.findByIdAndDelete(_id);
		res.status(200).json({ message: 'Room deleted' });
	} catch (error) {
		res.status(400).json(error);
	}
};

export const updateRoomById = async (req, res) => {
	try {
		const { id } = req.params;
		const updatedFields = req.body;
		await Room.findByIdAndUpdate(id, updatedFields);
		res.status(200).json({ message: 'Room updated' });
	} catch (error) {
		res.status(400).json(error);
	}
};
