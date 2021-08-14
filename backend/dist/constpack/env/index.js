"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_ACESS_INFO = exports.SERVE_MODE = void 0;
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const dotenvPath = path_1.default.resolve(__dirname, '..', '..', '.env');
dotenv_1.default.config({ path: dotenvPath });
exports.SERVE_MODE = process.env.NODE_ENV;
exports.DB_ACESS_INFO = {
    development: {
        host: '127.0.0.1',
        user: 'root',
        port: 3306,
        password: process.env.DB_PASSWORD,
        database: 'node_mysql_ts',
    },
    stage: {
        host: '127.0.0.1',
        user: 'root',
        port: 3306,
        password: process.env.DB_PASSWORD,
        database: 'node_mysql_ts',
    },
    production: {
        host: '127.0.0.1',
        user: 'root',
        port: 3306,
        password: process.env.DB_PASSWORD,
        database: 'node_mysql_ts',
    },
};
//# sourceMappingURL=index.js.map