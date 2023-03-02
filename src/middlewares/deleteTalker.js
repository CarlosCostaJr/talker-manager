const getTalkers = require('../utils/getTalkers');
const setTalkers = require('../utils/setTalkers');

const deleteTalker = (req, res) => {
  const { id } = req.params;
  const talkers = getTalkers();
  const newTalkers = talkers.filter((talker) => talker.id !== +id);

  setTalkers(newTalkers);

  return res.status(204).json({ message: 'Pessoa palestrante deletada com sucesso' });
};

module.exports = deleteTalker;
