const crypto = require('crypto');

const tokenGenerator = () => {
   const token = crypto.randomBytes(8).toString('hex');
   return token;
};

module.exports = tokenGenerator;