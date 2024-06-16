const PORT = 3500;
const express = require('express');

const app = express();

app.get('/', (req, res) => {
// simple message that displays on localhost:3500
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

