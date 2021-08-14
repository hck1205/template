"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRouter = exports.AuthRouter = void 0;
var auth_1 = require("./auth");
Object.defineProperty(exports, "AuthRouter", { enumerable: true, get: function () { return __importDefault(auth_1).default; } });
var posts_1 = require("./posts");
Object.defineProperty(exports, "PostRouter", { enumerable: true, get: function () { return __importDefault(posts_1).default; } });
//# sourceMappingURL=index.js.map