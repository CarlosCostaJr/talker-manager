const express = require('express');
const validateNotEmpityFields = require('../middlewares/validation/validateNotEmpityFields');
const validateRateField = require('../middlewares/validation/validateRateField');
const validateTalkerFields = require('../middlewares/validation/validateTalkerFields');
const validateToken = require('../middlewares/validation/validateToken');
const validateWatchedAt = require('../middlewares/validation/validateWatchedAtField');
const deleteTalker = require('../utils/deleteTalker');

const router = express.Router();

const getTalkers = require('../utils/getTalkers');
const setTalkers = require('../utils/setTalkers');
const tokenGenerator = require('../utils/tokenGenerator');
const updateTalkersFile = require('../utils/updateTalkersFile');

router.get('/', (_req, response) => {
   const parsedTalkers = getTalkers();
   if (!parsedTalkers) return [];
   response.status(200).json(parsedTalkers);
});

router.get('/:id', (_req, response) => {
   const { id } = _req.params;
   const parsedTalkers = getTalkers();
   const talker = parsedTalkers.find((tal) => tal.id === +id);
   if (!talker) {
      return response.status(404).json({
         message: 'Pessoa palestrante não encontrada',
      });
   }
   return response.status(200).json(talker);
});

router.get('/search', validateToken, (req, res) => {
   const searchTerm = req.query.q;
   const token = tokenGenerator();
   req.headers = { Authorization: token };
   const Talkers = getTalkers();
   if (!searchTerm) {
      return res.status(200).json(Talkers);
   }
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

router.put('/:id',
   validateToken,
   validateNotEmpityFields,
   validateTalkerFields,
   validateWatchedAt,
   validateRateField,
   (req, res) => {
      const token = tokenGenerator();
      req.headers = { Authorization: token };
      const id = +req.params.id;
      const { name, age, talk } = req.body;
      const talkers = getTalkers();
      const index = talkers.findIndex((t) => t.id === id);
      const newTalker = { id, name, age, talk };

      talkers.splice(index, 1, newTalker);
      updateTalkersFile(talkers);
      return res.status(200).json(newTalker);
   });

router.delete('/:id', validateToken, (req, res) => {
   const { id } = req.params;
   const talkers = getTalkers();
   const talkerIndex = talkers.findIndex((talker) => talker.id === +id);

   if (talkerIndex === -1) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
   }

   talkers.splice(talkerIndex, 1);
   deleteTalker(talkers);
   return res.status(204).json({ message: 'Pessoa palestrante deletada com sucesso' });
});

module.exports = router;