const express = require('express');
const cors = require('cors');
const server = express();

const PORT = process.env.PORT || 3500;

server.use(cors());
server.get('/', (req, res) => {
  res.status(200).json({ msg: 'TALENT PLUS' });
});

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
