const express = require("express");
const app = express();

const mongoose = require("mongoose");
const db_url = require("./config/db");

const cors = require("cors");

const { Product } = require("./models/Product");
/* 
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser"); */
app.use(express.json());
app.use(cors());
//db
mongoose.connect(db_url.connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB is successfully connected!"))
    .catch((err) => console.log(err));

//api endpoints
app.get("/", (req, res) => res.status(200).send("Hello!!"));

app.post("/product/card", (req, res) => {
    const productCard = req.body;

    Product.create(productCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })

});

app.get("/product/card", (req, res) => {

    Product.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })

});


//listener
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`The server is running on port: ${port}!!`);
});