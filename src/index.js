const express = require('express');
const { readFile } = require('./utils/readFile');
const { token } = require('./utils/token');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', async (req, res) => {
  try {
    const talkers = await readFile();
    if (talkers) { res.status(200).json(talkers); } else { res.status(200).json([]); }
  } catch (error) {
    console.log('deu ruim');
  }
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const talkers = await readFile();
    const talker = talkers.find((talkerGET) => talkerGET.id === Number(id));
    if (!talker) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).json(talker);
  } catch (error) {
    console.log('deu ruim');
  }
});

app.post('/login', (req, res) => {
  const getToken = token(16);
  res.status(200).json({
    token: getToken,
  });
});