const Jokes = require("../../models/jokes");

const controller = {};

// create method here
controller.create = (req, res) => {
  const text = req.body.text;
  Jokes.create(text)
    .then(data => res.json(data))
    .catch(err => console.log("BACKEND ERROR:", err));
};

module.exports = controller;
