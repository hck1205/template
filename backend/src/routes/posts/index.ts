import { Router } from 'express';
import {
  getPosts,
  createPost,
  getPost,
  deletePost,
  updatePost,
} from '../../controllers/posts';
import { isLoggedin } from '../../passport/middleware';

const router = Router();

router.route('/register').post(isLoggedin, createPost);

router.route('/').get(getPosts).post(createPost);

router.route('/:postId').get(getPost).delete(deletePost).put(updatePost);

export default router;
