const express = require('express');
const { readFile } = require('./utils/readFile');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (req, res) => {
  try {
    const talkers = await readFile();
    if (talkers) { res.status(200).json(talkers); } else { res.status(200).json([]); }
  } catch (error) {
    console.log('deu ruim');
  }
});

app.listen(PORT, () => {
  console.log('Online');
});
