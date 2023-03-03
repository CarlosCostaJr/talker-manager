const fs = require('fs');

const updateTalkersFile = (talkers) => {
    fs.writeFileSync('src/talker.json', JSON.stringify(talkers));
 };

 module.exports = updateTalkersFile;