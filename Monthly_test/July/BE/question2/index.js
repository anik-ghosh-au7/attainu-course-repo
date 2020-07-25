import express from 'express';
import data_router from './route/data.route';
// import path from 'path';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', data_router);
app.use((req, res) => {
  res.status(404).send({msg: 'Invalid route'});
});

app.listen(3000, function () {
  console.log('Server started on port 3000!!!');
});