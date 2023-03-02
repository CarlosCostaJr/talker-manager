const loginAuthentication = (request, _response, next) => {
   const emailRegex = /^[a-z0-9\-_]+@[a-z]+\.[a-z]{2,}$/;
   const { email, password } = request.body;

   if (!email) return next({ status: 400, message: 'O campo "email" é obrigatório' });

   if (!emailRegex.test(email)) {
      return next({ status: 400, message: 'O "email" deve ter o formato "email@email.com"' });
   }
   if (!password) return next({ status: 400, message: 'O campo "password" é obrigatório' });
   
   if (password.length < 6) {
      return next({ status: 400, message: 'O "password" deve ter pelo menos 6 caracteres' });
   }
   next();
};

module.exports = loginAuthentication;