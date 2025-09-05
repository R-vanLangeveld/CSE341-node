const routes = require("express").Router();
const contactsController = require("../controllers/contacts");

routes.get("/", (req, res) => { res.send("Hello World"); });

routes.get("/contacts/", contactsController.getAll);
routes.get("/contacts/:id", contactsController.getSingle);

module.exports = routes;