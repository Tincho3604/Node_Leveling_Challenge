const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'})

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db.connect((error) => {
    if(error){
        console.log('The connection error is: '+error);
        return;
    }
    console.log('Connected to the database, successfully!')
});
module.exports = db;