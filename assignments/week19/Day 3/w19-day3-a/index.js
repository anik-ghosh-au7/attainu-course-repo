import express from 'express';
import router from './routes/user.routes';


const app = express();


// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.get('/list', router);
app.post('/list/:item', router);

app.use((req, res) => {
  res.status(404).send({msg: 'not a valid route'});
});

app.listen(3000, function () {
  console.log('Server started on port 3000!');
});