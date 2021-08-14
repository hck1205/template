"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotLoggedin = exports.isLoggedin = void 0;
const isLoggedin = (req, res, next) => {
    if (req.isAuthenticated()) {
        // express와 passport에서 제공하는 공식적인 함수
        next(); // next(e) >> 에러를 처리하는 미들웨어를 넘어감 / next()는 다음 미들웨어로 넘어감
    }
    else {
        res.status(401).send('로그인이 필요합니다.');
    }
};
exports.isLoggedin = isLoggedin;
const isNotLoggedin = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.status(401).send('로그인한 사용자는 접근할 수 없습니다.');
    }
};
exports.isNotLoggedin = isNotLoggedin;
//# sourceMappingURL=middleware.js.map