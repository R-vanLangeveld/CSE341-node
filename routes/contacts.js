const routes = require("express").Router();
const project1Controller = require("../controllers/project1");

routes.get("/contacts", project1Controller.contactsRoute);

routes.get("/", project1Controller.getAll);
routes.get("/:id", project1Controller.getSingle);

module.exports = routes;