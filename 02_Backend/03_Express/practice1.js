// @ts-check
const express = require('express');

const app = express();
const PORT = 4000;

app.get('/:email/:password/:name/:gender', (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번에서 실행 중 . . .`);
});
