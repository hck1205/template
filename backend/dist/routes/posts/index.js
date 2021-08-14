"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_1 = require("../../controllers/posts");
const middleware_1 = require("../../passport/middleware");
const router = express_1.Router();
router.route('/register').post(middleware_1.isLoggedin, posts_1.createPost);
router.route('/').get(posts_1.getPosts).post(posts_1.createPost);
router.route('/:postId').get(posts_1.getPost).delete(posts_1.deletePost).put(posts_1.updatePost);
exports.default = router;
//# sourceMappingURL=index.js.map