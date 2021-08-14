"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excuteQuery = exports.makeResultMessage = void 0;
const database_1 = require("../database");
const makeResultMessage = (action, result) => {
    const queryResult = result.affectedRows > 0 ? 'completed' : 'failed';
    return { message: `${action} ${queryResult}` };
};
exports.makeResultMessage = makeResultMessage;
const excuteQuery = async (query, params) => {
    const conn = await database_1.connect();
    try {
        const [rows, fields] = await conn.query(query, params);
        return rows;
    }
    catch (error) {
        throw `Error occurred on Query: ${query}, Due to ${error}`;
    }
    finally {
        conn.end();
    }
};
exports.excuteQuery = excuteQuery;
//# sourceMappingURL=common.js.map