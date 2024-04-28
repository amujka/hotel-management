import { Router } from 'express';
import {
	getRooms,
	addNewRoom,
	deleteRoomById,
	updateRoomById,
	getRoom,
} from '../controllers/roomController.js';
const router = Router();

router.get('/rooms', getRooms);
router.get('/rooms/:id', getRoom);
router.patch('/rooms/:id', updateRoomById);
router.post('/rooms', addNewRoom);
router.delete('/rooms', deleteRoomById);

export default router;
