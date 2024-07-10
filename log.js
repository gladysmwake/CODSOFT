const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/home.html', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
