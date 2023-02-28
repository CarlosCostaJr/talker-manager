const express = require('express');
const loginAuthentication = require('../middlewares/auth/loginAuthentication');
const tokenGenerator = require('../utils/tokenGenerator');

const router = express.Router();

router.post('/', loginAuthentication, (req, res) => {
const token = tokenGenerator();
  return res.status(200).json({ token });
});

module.exports = router;