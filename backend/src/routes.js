const express = require("express");

const routes = express.Router();

routes.get("/users", (req, res) => {
    return res.json({"io": "oi"});
});

module.exports = routes;