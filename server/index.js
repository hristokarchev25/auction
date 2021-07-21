const express = require("express");
const app = express();

const mongoose = require("mongoose");
const connection_url = 'mongodb+srv://admin:SbiWUjPPBYoNqo7C@realmcluster.2crnj.mongodb.net/systemdb?retryWrites=true&w=majority';

/* 
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser"); */

//db
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB is successfully connected!"))
    .catch((err) => console.log(err));

//api endpoints
app.get("/", (req, res) => res.status(200).send("Hello!!"));


//listener
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`The server is running on port: ${port}!!`);
});