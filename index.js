const express = require('express');
const app = express();

const mysql = require("mysql2");
const db = require("./models");
const {Posts} = require("./models");

app.get("/select", (req, res) => {
    Posts.findAll().then((users)=> {
        res.send(users);
    })
    .catch((err) => {
        console.log(err);
    })
})

app.get("/insert", (req, res) => {
    Posts.create({
        Título: "Bitcoins",
        Contenido:"Economia de criptomonedas",
        Imagen: "https://elordenmundial.com/wp-content/uploads/2021/04/bitcoin-moneda-activo-financiero-inflaccio%CC%81n.jpg",
        Categoría:"Economia",
        Fecha: "20/01/2015"
    }).catch((err) => {
        if(err){
            console.log(err)
        }
    })
    res.send("insert");
})






db.sequelize.sync().then((req) => {
    app.listen(4000, () => {
        console.log("Running on port 4000")
    })
})

