import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import chalk from "chalk";
import compression from "compression";
import routes from '../routes';
import "express-async-errors";  // <---------- apply async error patch
import { errorHandler } from "../middleware/error";



export default ({ app }: { app: express.Application }) => {

  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable('trust proxy');

  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());


  // adding Helmet to enhance your API's security
  app.use(helmet());


  // Middleware that transforms the raw string of req.body into json
  // body-parser defaults to a body size limit of 300kb parse requests of content-type: application/json
  app.use(bodyParser.json({limit: "300kb"})); 


  // default limit to '100kb' and parameterLimit 1000 parse requests of content-type: application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({limit: "300kb", extended: true, parameterLimit:1000})); 


  // Use morgan to log requests. adding morgan to log HTTP requests plus CHALK NPM PACKAGE TO COLORIZE IT.
  const morganMiddleware = morgan(function (tokens, req, res) {
    return [
        chalk.hex('#34ace0').bold(tokens.method(req, res)),
        chalk.hex('#ffb142').bold(tokens.status(req, res)),
        chalk.hex('#ff5252').bold(tokens.url(req, res)),
        chalk.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
        chalk.yellow(tokens['remote-addr'](req, res)),
        chalk.hex('#1e90ff')(tokens['user-agent'](req, res))
    ].join(' ');
  });
  
  app.use(morganMiddleware);


  // compress all responses
  app.use(compression());

  // ALL ROUTES IN THE ROUTES FOLDER WILL ADD PREFIX /api
  app.use('/api', routes);

  // Error handling
  app.use(errorHandler);

  // BASE URL TO CHECK IF API IS WORKING
  app.get('/', (req: Request, res: Response) => res.send('App is working'));

};

