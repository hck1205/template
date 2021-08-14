"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const passport_1 = require("./passport");
// Routes
const routes_1 = require("./routes");
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }
    middlewares() {
        this.app.use(express_1.default.json()); // json 형식의 본문을 처리
        this.app.use(
        // form으로 들어오는 데이터를 처리
        express_1.default.urlencoded({
            extended: true,
        }));
        this.app.use(morgan_1.default('dev'));
        this.app.use('/', express_1.default.static('public')); // express 에서 제공하는 middleware로 지정을하면 외부에서 폴더를 노출시켜 접근 가능하게 해준다
        this.app.use(cors_1.default({
            origin: true,
            credentials: true, // cors && axios 둘다 설정을 해줘야함
        }));
        this.app.use(cookie_parser_1.default(process.env.COOKIE_SECRET));
        passport_1.sessionConfig(this.app);
        passport_1.passportConfig(this.app);
    }
    routes() {
        this.app.use('/api/v1/auth', routes_1.AuthRouter);
        this.app.use('/api/v1/posts', routes_1.PostRouter);
    }
    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on Port', this.app.get('port'));
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map