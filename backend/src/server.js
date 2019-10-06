const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.json({"io": "oi"});
});

app.listen(3333);