const fs = require('fs');
const getTalkers = require('./getTalkers');

const setTalkers = (newTalkers) => {
  const talkers = getTalkers();
  talkers.push(newTalkers);
  fs.writeFileSync('src/talker.json', JSON.stringify(talkers));
};

module.exports = setTalkers;