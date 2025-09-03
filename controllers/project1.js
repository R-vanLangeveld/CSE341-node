const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDatabase().db().collection("contacts").find();
  result.toArray().then((contacts) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(contacts);
  });
}

const getSingle = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb.getDatabase().db().collection("contacts").find({ _id: contactId});
  result.toArray().then((contacts) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(contacts[0]);
  });
}

const contactsRoute = (req, res) => {
  res.send("Hello World");
  console.log("working");
}

module.exports = {
  contactsRoute, getAll, getSingle
}