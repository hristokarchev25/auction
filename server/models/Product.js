const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 25,
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 250,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/,
    }
});

const Product = mongoose.model("Products", productSchema);

module.exports = { Product };