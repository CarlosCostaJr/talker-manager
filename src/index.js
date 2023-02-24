const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', (_request, response) => {
  const talkers = fs.readFileSync('src/talker.json');
  const parsedTalkers = JSON.parse(talkers);
  if (!parsedTalkers) return [];
  response.status(HTTP_OK_STATUS).json(parsedTalkers);
});

app.listen(PORT, () => {
  console.log('Online');
});
