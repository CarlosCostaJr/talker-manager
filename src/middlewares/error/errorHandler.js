const errorHandler = (error, _request, response, _next) =>
  response.status(error.status).json({ message: error.message });

  module.exports = errorHandler;