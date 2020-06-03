import express from 'express';
import router from './routes/user.routes';


const app = express();

app.use('/', router);

app.use((req, res) => {
  res.status(404).send({msg: 'not a valid route'});
});

app.listen(3000, function () {
  console.log('Server started on port 3000!');
});