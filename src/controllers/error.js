export const get404 = (req, res) => {
  const requestedUrl = req.url;
  console.log(`${requestedUrl} returned 404 (Not Found)!`);
  res.status(404).send("404 Not Found");
};
