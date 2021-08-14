"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../../controllers/auth");
const passport_1 = require("../../passport");
const router = express_1.Router();
router.get('/profile', passport_1.isLoggedin, auth_1.profile);
router.post('/signup', auth_1.signup);
router.post('/signin', auth_1.signin);
exports.default = router;
//# sourceMappingURL=index.js.map