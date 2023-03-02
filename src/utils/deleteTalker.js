const fs = require('fs');

const deleteTalker = (talkers) => {
  fs.writeFileSync('src/talker.json', JSON.stringify(talkers));
};

module.exports = deleteTalker;