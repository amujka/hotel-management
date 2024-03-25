import { Router } from 'express';
import { getBookings } from '../controllers/bookingsController.js';

const router = Router();

router.get('/bookings', getBookings);

export default router;
