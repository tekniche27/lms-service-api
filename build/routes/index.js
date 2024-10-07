"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// const privateRouter = require('./private');
var publicRouter = require('./public');
var router = express_1.default.Router();
// router.use('/', privateRouter);
router.use('/', publicRouter);
module.exports = router;
