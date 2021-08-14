"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_session_1 = __importDefault(require("express-session"));
const constpack_1 = require("../constpack");
const MySQLStore = require('express-mysql-session')(express_session_1.default);
exports.default = (app) => {
    app.use(express_session_1.default({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false, // https를 쓸 때 true
        },
        name: 'tmpbck',
        store: new MySQLStore({
            ...constpack_1.DB_ACESS_INFO[constpack_1.SERVE_MODE],
        }), // 서버가 재시작되면 메모리에 있는 데이터가 없어지기 때문에 유저들의 로그인이 풀림, 그렇기 때문에 store옵션을 넣어서 레디스같은 memcached db를 이용해 그것을 방지함
    }));
};
//# sourceMappingURL=session.js.map