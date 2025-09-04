const ryndeeRoute = (req, res) => {
  res.send("Hello, User. To use this api add /contacts to the end of the url");
}

const alexRoute = (req, res) => {
  res.send("Hello, Alex van Langeveld");
}

module.exports = {
  ryndeeRoute,
  alexRoute
}