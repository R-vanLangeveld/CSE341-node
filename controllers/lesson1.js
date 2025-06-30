const ryndeeRoute = (req, res) => {
  res.send("Hello, Ryndee van Langeveld");
}

const alexRoute = (req, res) => {
  res.send("Hello, Alex van Langeveld");
}

module.exports = {
  ryndeeRoute,
  alexRoute
}