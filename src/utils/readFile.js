const fs = require('fs').promises;

const path = 'src/talker.json';

const readFile = async () => {
  try {
    const fileContent = await fs.readFile(path, 'utf-8');
    const talkers = JSON.parse(fileContent);
    return talkers;
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
    return null;
  }
};

module.exports = { readFile };
