import express from 'express';
import path from 'path';
import data_router from './route/data.route';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/Data_DB', { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true })
  .then(console.log('DB connected successfully'))
  .catch(err => console.log(err));

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', data_router);
app.use((req, res) => {
  res.status(404).send({msg: 'Invalid route'});
});

app.listen(3000, function () {
  console.log('Server started on port 3000!!!');
});