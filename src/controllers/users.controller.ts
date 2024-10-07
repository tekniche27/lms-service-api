import { Request, Response, NextFunction } from "express";

import userService from '../services/users.service';

const findByUserId = async (req: Request, res: Response, next: NextFunction) => 
    {
      try 
      {
          const { userId } = req.body

          let data = await userService.findByUserId(userId);
          return res.send(data);
    
      }
      catch (error) 
      {
        throw error
      }
    
}

export default { findByUserId };
