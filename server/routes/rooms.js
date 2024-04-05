import { Router } from 'express';
import {
	getRooms,
	getRoom,
	addNewRoom,
	deleteRoomById,
} from '../controllers/roomController.js';
const router = Router();

router.get('/rooms', getRooms);
router.get('/room/:roomSlug', getRoom);
router.post('/rooms', addNewRoom);
router.delete('/rooms', deleteRoomById);

export default router;
