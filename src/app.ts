import express from "express";

const config = require('./config/config');

async function startServer() {
  const app = express();

  await require('./loaders').default({ expressApp: app });

  app.listen(config.port, (err: any) => {

    if (err) 
    {
      process.exit(1);
    }

    console.log('Upload API listening on port: ' + config.port);

  });
}

startServer();


