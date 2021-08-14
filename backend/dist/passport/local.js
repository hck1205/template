"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const common_1 = require("../controllers/common");
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
exports.default = () => {
    passport.use(new LocalStrategy({
        usernameField: 'userId',
        passwordField: 'password',
    }, async (userId, password, done) => {
        try {
            const [user,] = (await common_1.excuteQuery('SELECT * FROM user WHERE userId = ?', [
                userId,
            ]));
            if (!user) {
                return done(null, false, { reason: '존재하지 않는 사용자입니다!' });
            }
            const result = await bcrypt_1.default.compare(password, user.password);
            if (result) {
                console.log('LocalStrategy');
                return done(null, user);
            }
            // 첫번째 param은 서버에러 현재는 'null'
            return done(null, false, { reason: '비밀번호가 틀립니다.' });
        }
        catch (e) {
            console.error(e);
            return done(e);
        }
    }));
};
//# sourceMappingURL=local.js.map