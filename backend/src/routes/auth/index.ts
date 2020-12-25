import { Router } from 'express';
import { signup, signin, profile } from '../../controllers/auth';
import { isLoggedin } from '../../passport';
const router = Router();

router.get('/profile', isLoggedin, profile);
router.post('/signup', signup);
router.post('/signin', signin);

export default router;
