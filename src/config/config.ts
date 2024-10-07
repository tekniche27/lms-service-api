require('dotenv').config();

let config = {
    // App env
    env: process.env.NODE_ENV || 'development',
    
    // App debug mode
    debug: process.env.DEBUG ? process.env.DEBUG === 'true' : true,
    
    // Server port
    port: process.env.SERVER_PORT || 3007,
    
    // Refresh Token Secret
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || "refreshTokenSecret",

    // JWT secret
    jwtSecret: process.env.JWT_SECRET || "jwtSecret",
    
    // JWT expire time in seconds
    jwtExpire: parseInt(process.env.JWT_EXPIRE as string) || 86400, //Expired in 24 HOURS

    //Password Salt Rounds for Bcrypt
    passwordSaltRounds: process.env.PASSWORD_SALT_ROUNDS || 12
}


module.exports = config;