const ryndeeRoute = (req, res) => {
  res.send("Hello, Ryndee van Langeveld. The other availible routes are: /alex and /contacts");
}

const alexRoute = (req, res) => {
  res.send("Hello, Alex van Langeveld");
}

module.exports = {
  ryndeeRoute,
  alexRoute
}