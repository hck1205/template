"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.deletePost = exports.createPost = exports.getPost = exports.getPosts = void 0;
const common_1 = require("../common");
const getPosts = async (req, res) => {
    const result = await common_1.excuteQuery('SELECT * FROM posts');
    return res.json(result);
};
exports.getPosts = getPosts;
const getPost = async (req, res) => {
    const id = req.params.postId;
    const result = await common_1.excuteQuery('SELECT * FROM posts WHERE id = ?', [id]);
    return res.json(result);
};
exports.getPost = getPost;
const createPost = async (req, res) => {
    const { title, contents } = req.body;
    const newPost = {
        title: title,
        contents: contents,
    };
    console.log('newPost', newPost);
    const result = await common_1.excuteQuery('INSERT INTO posts SET ?', [newPost]);
    const message = common_1.makeResultMessage('Post Create', result);
    return res.json(message);
};
exports.createPost = createPost;
const deletePost = async (req, res) => {
    const id = req.params.postId;
    const result = await common_1.excuteQuery('DELETE FROM posts WHERE id = ?', [id]);
    const message = common_1.makeResultMessage('Post Delete', result);
    return res.json(message);
};
exports.deletePost = deletePost;
const updatePost = async (req, res) => {
    const id = req.params.postId;
    const updatePost = req.body;
    const result = await common_1.excuteQuery('UPDATE posts SET ? WHERE id = ?', [
        updatePost,
        id,
    ]);
    const message = common_1.makeResultMessage('Post Update', result);
    return res.json(message);
};
exports.updatePost = updatePost;
//# sourceMappingURL=index.js.map