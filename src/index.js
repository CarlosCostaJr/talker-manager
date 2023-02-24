const express = require('express');
const getTalkers = require('./utils/getTalkers');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', (_request, response) => {
  const parsedTalkers = getTalkers();
  if (!parsedTalkers) return [];
  response.status(HTTP_OK_STATUS).json(parsedTalkers);
});

app.get('/talker/:id', (_request, response) => {
  const { id } = _request.params;
  const parsedTalkers = getTalkers();
  const talker = parsedTalkers.find((tal) => tal.id === +id);
  if (!talker) {
    return response.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
  }
  return response.status(200).json(talker);
});

app.listen(PORT, () => {
  console.log('Online');
});
