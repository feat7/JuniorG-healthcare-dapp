const express = require('express');
const next = require('next');
const mongoose = require("mongoose");

const app = next({
    dev: process.env.NODE_ENV !== 'production'
});
const routes = require('./nextRoutes');
const expressRoutes = require('./routes');
const handle = routes.getRequestHandler(app);

mongoose.Promise = global.Promise;


// Register Models
require("./registerModels");

app.prepare().then(() => {
    const port = 8000 || process.env.PORT;
    const server = express();
    const Web3 = require('web3');
    const truffle_connect = require('./ethereum/connection/app.js');
    const bodyParser = require('body-parser');
    server.use(bodyParser.json());

    server.use('/server', expressRoutes); // Express Routes

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    mongoose
        .connect(
            "mongodb://localhost:27017/healthcaredapp",
            { useNewUrlParser: true }
        )
        .then(() => console.log("connection successful"))
        .catch(err => console.error(err));

    mongoose.set("debug", true);

    server.listen(port, () => {
        truffle_connect.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/34db7aa51a29454db3a3b3b68abd92ca"));

        console.log("Express Listening at http://localhost:" + port);

    });


}).catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
});