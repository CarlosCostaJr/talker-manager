/* eslint-disable complexity */
function validateNotEmpityFields(req, res, next) {
   const { name, age, talk } = req.body;
   // const { rate } = talk;
   if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
   if (!age) return res.status(400).json({ message: 'O campo "age" é obrigatório' });
   if (!talk) return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
   // if (!rate) return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
   // if (!watchedAt) return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
   next();
}

module.exports = validateNotEmpityFields;

   // const fields = [name, age, talk, watchedAt, rate];
   // const fieldsName = ['name', 'age', 'talk', 'watchedAt', 'rate'];
   // for (const field in fields) {
   //    if (!field) return res.status(400).json({ message: `O campo "${fieldsName}" é obrigatório` });
   // }

   // const fields = [name, age, talk, watchedAt, rate];
   // for (const field of fields) {
   //    if (!field) {
   //       const fieldName = fields[fields.indexOf(field)];
   //       return res.status(400).json({ message: `O campo "${fieldName}" é obrigatório` });
   //    }
   // }