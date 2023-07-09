const errorHandler = (err, req, res, next) => {
  // console.error(err); // Log the error for debugging

  let statusCode = err.statusCode || 500;
  let errorMessage = err.message || 'Internal Server Error';

  if (process.env.NODE_ENV === 'production') {
    // Omit stack traces in production environment
    err.stack = undefined;
  }

  res.status(statusCode).json({
    error: {
      message: errorMessage,
    },
  });
};

module.exports = errorHandler;
