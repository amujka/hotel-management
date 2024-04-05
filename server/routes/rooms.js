import { Router } from 'express';
import { getRooms, getRoom, addNewRoom } from '../controllers/roomController.js';
const router = Router();

router.get('/rooms', getRooms);
router.get('/room/:roomSlug', getRoom);
router.post('/rooms',addNewRoom);

export default router;
