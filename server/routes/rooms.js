import { Router } from 'express';
import {
	getRooms,
	addNewRoom,
	deleteRoomById,
	getRoom,
} from '../controllers/roomController.js';
const router = Router();

router.get('/rooms', getRooms);
router.get('/rooms/:id', getRoom);
router.post('/rooms', addNewRoom);
router.delete('/rooms', deleteRoomById);

export default router;
