import express from 'express';
import data_controller from '../controller/data.controller';

const router = express.Router();

let arr = [data_controller.gettodos, data_controller.getposts, data_controller.getusers, data_controller.getresult];

async function synchronous(req, res) {
    for (let i = 0; i < arr.length; i++) {
        await arr[i]();
    }
    res.status(200).send('check console');
}

router.get('/', synchronous);

module.exports = router;