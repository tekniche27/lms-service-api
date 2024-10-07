"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var loginpost = require('../controllers').loginpost;
var validation = require('../middleware/validation');
var schemas = require('../schema/schemas');
router.post('/v1/login', validation(schemas.loginPost, 'body'), loginpost.postLogin);
module.exports = router;
