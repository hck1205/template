"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../controllers/common");
const local_1 = __importDefault(require("./local"));
const passport = require('passport');
exports.default = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
    passport.serializeUser(({ id }, done) => {
        // [{ id: 3, cookie: '#$%!@#SDRWERWER@#$WER' }]
        // 1. id는 서버쪽에서 Kepp
        // 2. cookie는 클라이언트가 가지고 서버에 요청을 함
        // 3. 서버는 쿠키와 일치하는 아이디를 찾아 deserialize해서 정보를 찾아줌
        return done(null, id);
    });
    passport.deserializeUser(async (id, done) => {
        try {
            const [user] = (await common_1.excuteQuery('SELECT * FROM user WHERE id = ?', [
                id,
            ]));
            return done(null, user); // req.user에 저장됨
        }
        catch (e) {
            console.error(e);
            return done(e);
        }
    });
    local_1.default();
};
//# sourceMappingURL=passport.js.map