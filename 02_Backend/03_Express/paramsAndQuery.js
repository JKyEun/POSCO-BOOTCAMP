// @ts-check
const express = require('express');

const app = express();
const PORT = 4000;

// http://localhost:4000/(id)
app.get('/', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.listen(PORT, () => {
  console.log(`${PORT}번에서 서버 실행 중 . . .`);
});
