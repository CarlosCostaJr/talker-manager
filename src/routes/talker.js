const express = require('express');

const router = express.Router();

const getTalkers = require('../utils/getTalkers');

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

module.exports = router;