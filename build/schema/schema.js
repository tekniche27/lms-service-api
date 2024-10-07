"use strict";
var Joi = require('joi');
var schemas = {
    loginPost: Joi.object().keys({
        factory: Joi.string().required(),
        userId: Joi.string().required(),
        password: Joi.string().allow('').optional(),
        cardId: Joi.string().allow('').optional(),
        email: Joi.string().allow('').optional()
    })
};
module.exports = schemas;
