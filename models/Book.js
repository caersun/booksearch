const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: String,
    authors: [String],
    description: String,
    image: String,
    link: String,
    // date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;