"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("./express"));
exports.default = (function (_a) {
    var expressApp = _a.expressApp;
    express_1.default({ app: expressApp });
});
