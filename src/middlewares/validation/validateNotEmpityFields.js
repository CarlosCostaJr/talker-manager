/* eslint-disable complexity */
function validateNotEmpityFields(req, res, next) {
   const { name, age, talk } = req.body;
   if (name === undefined) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
   if (age === undefined) return res.status(400).json({ message: 'O campo "age" é obrigatório' });
   if (talk === undefined) return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
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