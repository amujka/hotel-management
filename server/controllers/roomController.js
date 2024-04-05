import Room from '../models/room.js';
export const getRooms = async (req, res) => {
	const rooms = await Room.find({});
	res.status(200).json({ rooms });
};

export const getRoom = async (req, res) => {
	const { roomSlug } = req.params;
	const room = await Room.findOne({ slug: roomSlug });
	res.locals.page = room.name;
	res.render('room', { room });
};

export const addNewRoom = async (req,res) => {
	try {
		const newRoom = new Room( req.body );
		newRoom.save();
		res.status(200).json({ message: "New room added!" });
	} catch (error) {
		console.log("error",error);
		res.status(400).json({error})
	}
	res.status
}
