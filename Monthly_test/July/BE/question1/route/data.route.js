import express from 'express';
import multer from 'multer';
import data_controller from '../controller/data.controller';
const router = express.Router();
import excelToJson from 'convert-excel-to-json';
import XLSX from 'xlsx';

const memoryStorage = multer.memoryStorage();
// let memoryStorage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, '../upload');
//      },
//     filename: function (req, file, cb) {
//         cb(null , file.originalname);
//     }
// });
const upload = multer({storage: memoryStorage}).single('excel');

router.post('/sendFile', upload, (req, res) => {
    console.log(req.file);
    let result = XLSX.read(req.file.buffer);
    data_controller.savedata(result.Strings)
    res.send('file saved')
});

module.exports = router;