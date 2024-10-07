"use strict";
require('dotenv').config();
var config = {
    // App env
    env: process.env.NODE_ENV || 'development',
    // Server port
    port: process.env.SERVER_PORT || 3007
};
module.exports = config;
