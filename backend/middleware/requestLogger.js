const requestLogger = (req, res, next) => {
  const isLoggingEnabled = req.headers["logging"]
  if (isLoggingEnabled) {
    console.log("URL", req.url)
    console.log("METHOD", req.method)
    console.log("HEADERS:", req.headers)
    console.log("BODY:", req.body)
    console.log("PARAMS:", req.params)
    console.log("QUERY:", req.query)
  }

  next()
};
module.exports = requestLogger