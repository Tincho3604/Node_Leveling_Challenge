const express = require('express');
const app = express();
const moment = require('moment');

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

app.get("/selectPostById/:id", (req, res) => {
    const idPost = req.params.id
    Posts.findAll({where:{id:idPost}}).then((users)=> {
        if(users.length === 0){
                res.send("¡Error! Post: NOT FOUND :(");
            }else{
            res.send(users);
        }
    })
    .catch((err) => {
        console.log("Error Post Not found",err);
    })
})


app.put("/updatePost/:id", (req, res) => {
    const idPost = req.params.id
    const formatedDate = moment(new Date(req.query.date)).format("YYYY-MM-DDTHH:mm:ss.SSS");
    Posts.update(
        {
            Título: req.query.title,
            Contenido: req.query.content,
            Imagen: req.query.image,
            Categoría: req.query.category,
            Fecha: formatedDate,
        },
        {where:{id:idPost}}).then((users)=> {
        if(users.length === 0){
                res.send("¡Error! Post: NOT FOUND :(");
            }else{
            res.send("¡Post editado con exito!")
        }
    })
    .catch((err) => {
        console.log("Error Post Not found",err);
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
    res.send("¡Post creado con exito!");
})


app.delete("/deletePost/:id", (req, res) => {
    const idPost = req.params.id
    Posts.destroy({where:{id: idPost}}).then((users)=> {
        if(users === 0){
            res.send("¡Error! Post: NOT FOUND :(");
        }else{
            res.send("¡Post borrado con exito!")
        }
    })
    .catch((err) => {
        console.log(err);
    })
})






db.sequelize.sync().then((req) => {
    app.listen(4000, () => {
        console.log("Running on port 4000")
    })
})

