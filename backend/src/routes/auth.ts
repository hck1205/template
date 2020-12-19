import { Router } from 'express';
import { signup, signin, profile } from '../controllers/auth';

const router = Router();

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/profile', profile)
  

export default router;
