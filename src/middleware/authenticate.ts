const config = require('../config/config');

import { Request, Response, NextFunction } from "express";

import jwt from 'jsonwebtoken';

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    
    const authorization = req.headers['authorization'];
    
    if(authorization)
    {        
        const token = authorization.replace('Bearer ','').replace('bearer ','');

        try 
        {
            const decoded = jwt.verify(token, config.jwtSecret);

            if(decoded)
            {
                return next();
            }
        } 

        catch (err) 
        {
            return res.status(403).send({
                message: err
            })
        }
        
    }

        return res.status(401).send({error: 'Unauthorized', message : 'Authentication failed (token).'});

}

export default authenticate;
