const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    authors: { type: Array, required: true },
    description: { type: String },
    image: { type: String },
    link: { type: String }
});

const Book =  new mongoose.model("Book", bookSchema);

module.exports = Book;