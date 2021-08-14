"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const promise_1 = require("mysql2/promise");
const constpack_1 = require("./constpack");
async function connect() {
    const connection = await promise_1.createPool({
        ...constpack_1.DB_ACESS_INFO[constpack_1.SERVE_MODE],
        connectionLimit: 10,
    });
    return connection;
}
exports.connect = connect;
//# sourceMappingURL=database.js.map