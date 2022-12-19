const fs = require('fs').promises;

const path = 'src/talker.json';

const writeFile = (newTalkers) => {
  fs.writeFile(path, JSON.stringify(newTalkers, null, 2));
};

module.exports = { writeFile };