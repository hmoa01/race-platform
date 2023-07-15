
// Wrapper function for handling asynchronous operations
const promiseWrapper = (asyncFn) => {
  return (req, res, next) => {
    asyncFn(req, res, next).catch(next);
  };
};
module.exports = promiseWrapper 























