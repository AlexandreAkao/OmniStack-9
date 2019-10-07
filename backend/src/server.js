require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

class App {
    constructor() {
        this.express = express();
        this.express.use(cors());

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

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(routes);
    }
}

module.exports = new App().express;


// const app = express();

// mongoose.connect(process.env.DB_ATLAS, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// app.use(express.json());

// app.use(routes);

// app.listen(3333);
