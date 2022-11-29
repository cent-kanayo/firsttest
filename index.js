const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'TALENT PLUS' });
});

app.listen(3500, () => console.log('Server is running'));
