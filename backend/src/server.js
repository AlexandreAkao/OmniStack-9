require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

class App {
    constructor() {
        this.express = express();

        this.dataBase();
        this.middlewares();
        this.routes();
    }

    dataBase() {
        mongoose.connect(process.env.DB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    routes() {
        this.express.use(routes);
    }

    middlewares() {
        this.express.use(express.json());
    }
    
}

module.exports = new App().express;
