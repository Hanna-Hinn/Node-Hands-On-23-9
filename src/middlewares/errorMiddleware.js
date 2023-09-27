const errorMiddleware = (err, req, res) => {
  console.error(err.message || err.stack);
  res.status(500).json({ error: `Something Went Wrong: ${err.message}` });
};

module.exports = errorMiddleware;
