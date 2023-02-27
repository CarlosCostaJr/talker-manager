const express = require('express');
const tokenGenerator = require('../utils/tokenGenerator');

const router = express.Router();

router.post('/', (req, res) => {
const token = tokenGenerator();
  return res.status(200).json({ token });
});

module.exports = router;