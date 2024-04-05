import { Router } from 'express';
import { postLogin, getLogout } from '../controllers/loginController.js';
const router = Router();
router.post('/login', postLogin);
router.get('/logout', getLogout);

export default router;
