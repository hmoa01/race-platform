class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'CustomError';
    this.statusCode = statusCode || 500;
  }
}

class ValidationError extends CustomError {
  constructor(message) {
    super(message || 'Validation Error', 400);
    this.name = 'ValidationError';
  }
}

class NotFoundError extends CustomError {
  constructor(message) {
    super(message || 'Resource Not Found', 404);
    this.name = 'NotFoundError';
  }
}

module.exports = {
  CustomError,
  ValidationError,
  NotFoundError,
};
