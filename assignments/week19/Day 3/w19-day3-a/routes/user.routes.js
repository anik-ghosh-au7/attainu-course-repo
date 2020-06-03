import express from 'express';
import User from '../controllers/user.controller';

const router = express.Router();

let user = new User();

router.get('/list', user.getData);

router.post('/list/:item', user.postData);

module.exports = router;