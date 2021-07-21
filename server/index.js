const express = require("express");
const app = express();

/* const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser"); */

app.get("/", (req, res)=>res.status(200).send("Hello!!"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`The server is running on port: ${port}!!`);
});