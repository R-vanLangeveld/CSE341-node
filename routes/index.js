const routes = require("express").Router();
const lesson1Controller = require("../controllers/lesson1");

routes.get("/", lesson1Controller.ryndeeRoute);
routes.get("/alex", lesson1Controller.alexRoute);

module.exports = routes;