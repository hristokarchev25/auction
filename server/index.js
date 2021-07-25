const express = require("express");
const app = express();

const mongoose = require("mongoose");
const db_url = require("./config/db");

const cors = require("cors");
const cookieParser = require("cookie-parser");
const body_Parser = require("body-parser");

//db
mongoose.connect(db_url.connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB is successfully connected!"))
    .catch((err) => console.log(err));


app.use(body_Parser.urlencoded({ extended: true }));
app.use(body_Parser.json());
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//api endpoints
app.use("/product", require('./routes/product'));
app.use("/users", require('./routes/user'));


//listener
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`The server is running on port: ${port}!!`);
});