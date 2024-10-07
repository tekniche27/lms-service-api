import { Request, Response,  NextFunction  } from "express";

const Joi = require('joi');

const validation = (schema: any, property: any) => 
{ 
    return (req: Request, res: Response, next: NextFunction) => 
    {

    const { error, values } = schema.validate(req[property]); 
    const valid = error == null; 
  
    if (valid) 
    { 
      /**
      * Manipulate the existing request object with sanitized versions from Joi. This is an example
      * and I'm sure there are other and more efficient ways.
      **/
      if(values && Object.keys(values).length > 0){
          for(const prop in values){
  
            //maybe not necessary, but defensive coding all the way.
            if(values.hasOwnProperty(prop)){
              if(req.query && req.query[prop]){
                req.query[prop] = values[prop];
              }
  
              if(req.body && req.body[prop]) {
                req.body[prop] = values[prop];
              }
  
              if(req.params && req.params[prop]) {
                req.params[prop] = values[prop];
              }
            }
          }
        }
      next(); 
    } 
    
    else 
    { 
      const { details } = error; 
      const message = details.map(i => i.message).join(',');
  
     
      res.status(422).json({ errno: 422, code: "Unprocessable Entity", message: message }) 
    } 
    

    } 

  } 

  export default validation;


