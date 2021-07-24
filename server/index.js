const express = require("express");
const app = express();

const mongoose = require("mongoose");
const db_url = require("./config/db");

const cors = require("cors");


/* const bodyParser = require("body-parser");
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
app.use("/product", require('./routes/product'));

//listener
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`The server is running on port: ${port}!!`);
});