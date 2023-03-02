const getTalkers = require('../utils/getTalkers');
const setTalkers = require('../utils/setTalkers');

const editTalker = (request, response) => {
    const { id } = request.params;
    const { name, age, talk } = request.body;

    const talkers = getTalkers();
    const newTalker = { id, name, age, talk };
    const newTalkers = talkers.map((talker) =>
      (talker.id === +id ? newTalker : talker));

    setTalkers(newTalkers);

    return response.status(200).json(newTalker);
};

module.exports = editTalker;
