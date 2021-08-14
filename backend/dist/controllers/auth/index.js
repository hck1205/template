"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.signin = exports.signup = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const common_1 = require("../common");
const passport = require('passport');
const signup = async (req, res) => {
    const user = req.body;
    const [{ cnt },] = (await common_1.excuteQuery('SELECT COUNT(*) as cnt FROM user WHERE userId = ?', [
        user.userId,
    ]));
    if (cnt) {
        res.send('User Already Exists');
    }
    else {
        const newUser = {
            ...user,
            password: await bcrypt_1.default.hash(user.password, 12),
        };
        const result = await common_1.excuteQuery('INSERT INTO user SET ?', [newUser]);
        const message = common_1.makeResultMessage('User Registered', result);
        return res.send(message);
    }
};
exports.signup = signup;
const signin = async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            console.error('Error', info);
            return res.status(401).send('invalid account information');
        }
        return req.login(user, async (loginErr) => {
            try {
                if (loginErr)
                    return next(loginErr);
                const [fullUser,] = (await common_1.excuteQuery('SELECT userId, nickname, email FROM user WHERE id = ?', [user.id]));
                return res.json(fullUser);
            }
            catch (e) {
                next(e);
            }
        });
    })(req, res, next);
};
exports.signin = signin;
const profile = (req, res) => {
    const user = { ...req.user };
    delete user.password;
    return res.json(user);
};
exports.profile = profile;
//# sourceMappingURL=index.js.map