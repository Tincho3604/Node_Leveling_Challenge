// Express
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");



// Importing routes
const recordsRoutes = require('./routes/records')

app.use(cookieParser())
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
app.use(express.urlencoded({ extended: true }));


app.use(recordsRoutes);
app.use(userRoutes)

const port = process.env.PORT || 4000;
const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => {
	console.log(`Listening on port ${port}`);

})