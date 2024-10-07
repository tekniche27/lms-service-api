import Joi from 'joi';

const schemas = {
  
  usersFindById: Joi.object().keys({
    userId: Joi.string().required()
  })

};

export default schemas;