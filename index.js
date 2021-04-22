const express = require('express');
const app = express();

const mysql = require("mysql2");
const db = require("./models");

db.sequelize.sync().then((req) => {
    app.listen(3001, () => {
        console.log("Running on port 4000")
    })
})

