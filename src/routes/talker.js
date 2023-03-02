const express = require('express');
const validateNotEmpityFields = require('../middlewares/validation/validateNotEmpityFields');
const validateRateField = require('../middlewares/validation/validateRateField');
const validateTalkerFields = require('../middlewares/validation/validateTalkerFields');
const validateToken = require('../middlewares/validation/validateToken');
const validateWatchedAt = require('../middlewares/validation/validateWatchedAtField');

const router = express.Router();

const getTalkers = require('../utils/getTalkers');
const setTalkers = require('../utils/setTalkers');
const tokenGenerator = require('../utils/tokenGenerator');

router.get('/', (_request, response) => {
   const parsedTalkers = getTalkers();
   if (!parsedTalkers) return [];
   response.status(200).json(parsedTalkers);
});

router.get('/:id', (_request, response) => {
   const { id } = _request.params;
   const parsedTalkers = getTalkers();
   const talker = parsedTalkers.find((tal) => tal.id === +id);
   if (!talker) {
      return response.status(404).json({
         message: 'Pessoa palestrante não encontrada',
      });
   }
   return response.status(200).json(talker);
});

router.post('/',
   validateToken,
   validateNotEmpityFields,
   validateTalkerFields,
   validateWatchedAt,
   validateRateField,
   (req, res) => {
      const token = tokenGenerator();
      req.headers = { Authorization: token };
      const { name, age, talk } = req.body;
      const talkers = getTalkers();
      const newTalker = {
         id: talkers.length + 1,
         name,
         age,
         talk,
      };
      setTalkers(newTalker);
      res.status(201).json(newTalker);
   });

module.exports = router;