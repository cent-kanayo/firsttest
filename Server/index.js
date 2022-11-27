const express = require('express');
const server = express();
const PORT = 3500;

server.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

  next();
});

server.get('/home', (req, res) => {
  res.status(200).json({ msg: 'TALENT PLUS' });
});

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
