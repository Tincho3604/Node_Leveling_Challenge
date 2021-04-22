const express = require('express');
const app = express();

const mysql = require("mysql2");
const db = require("./models");
const {Posts} = require("./models");

app.get("/selectAllPosts", (req, res) => {
    Posts.findAll({attributes: ['id','Título', 'Imagen', 'Categoría', 'Fecha'], order: [['FECHA', 'DESC']]}).then((users)=> {
        res.send(users);
    })
    .catch((err) => {
        console.log(err);
    })
})

app.get("/insert", (req, res) => {
    Posts.create({
        Título: "Diseños Web",
        Contenido:"Webs",
        Imagen: "https://image.freepik.com/vector-gratis/concepto-moderno-diseno-web-estilo-plano_23-2147933635.jpg",
        Categoría:"Desarrollo",
        Fecha: new Date(2019, 8, 11)
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

