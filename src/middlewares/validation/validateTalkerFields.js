function validateTalkerFields(req, res, next) {
   const { name, age } = req.body;
   if (name.length < 3) {
      return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
   }
   if (typeof age !== 'number') {
      return res.status(400).json({ message: 'O campo "age" deve ser do tipo "number"' });
   }
   if (!Number.isInteger(age)) {
      return res.status(400)
         .json({ message: 'O campo "age" deve ser um "number" do tipo inteiro' });
   }
   if (age < 18) {
      return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
   }
   next();
}

module.exports = validateTalkerFields;
