"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
var chalk_1 = __importDefault(require("chalk"));
var compression_1 = __importDefault(require("compression"));
exports.default = (function (_a) {
    var app = _a.app;
    // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
    // It shows the real origin IP in the heroku or Cloudwatch logs
    app.enable('trust proxy');
    // The magic package that prevents frontend developers going nuts
    // Alternate description:
    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors_1.default());
    // adding Helmet to enhance your API's security
    app.use(helmet_1.default());
    // Middleware that transforms the raw string of req.body into json
    // body-parser defaults to a body size limit of 300kb parse requests of content-type: application/json
    app.use(body_parser_1.default.json({ limit: "300kb" }));
    // default limit to '100kb' and parameterLimit 1000 parse requests of content-type: application/x-www-form-urlencoded
    app.use(body_parser_1.default.urlencoded({ limit: "300kb", extended: true, parameterLimit: 1000 }));
    // Use morgan to log requests. adding morgan to log HTTP requests plus CHALK NPM PACKAGE TO COLORIZE IT.
    var morganMiddleware = morgan_1.default(function (tokens, req, res) {
        return [
            chalk_1.default.hex('#34ace0').bold(tokens.method(req, res)),
            chalk_1.default.hex('#ffb142').bold(tokens.status(req, res)),
            chalk_1.default.hex('#ff5252').bold(tokens.url(req, res)),
            chalk_1.default.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
            chalk_1.default.yellow(tokens['remote-addr'](req, res)),
            chalk_1.default.hex('#1e90ff')(tokens['user-agent'](req, res))
        ].join(' ');
    });
    app.use(morganMiddleware);
    // compress all responses
    app.use(compression_1.default());
    // BASE URL TO CHECK IF API IS WORKING
    app.get('/', function (req, res) { return res.send('App is working'); });
});
