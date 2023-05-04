const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 3001;

console.log(process.env.EXTERNAL_PORT);

router.use(function (req, res, next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function (req, res) {
  // res.sendFile(path + 'index.html');
  res.send('helloo baby milo');
});

router.get('/sharks', function (req, res) {
  res.sendFile(path + 'sharks.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('Example app listening on port: ', port);
});
