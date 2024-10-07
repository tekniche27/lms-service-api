import express from 'express';
import userController from '../controllers/users.controller';
const router = express.Router();
import validation from '../middleware/validation';
import authenticate from '../middleware/authenticate';
import schemas from '../schema/schemas';

router.post('/v1/users', validation(schemas.usersFindById, 'body'), userController.findByUserId);


module.exports = router ;