const fs = require('fs');

const getTalkers = () => {
   const talkers = fs.readFileSync('src/talker.json');
   const parsedTalkers = JSON.parse(talkers);
   return parsedTalkers;
};

module.exports = getTalkers;