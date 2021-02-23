// booksearchie.herokuapp.com/
const express = require("express");
const path = require("path");

const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "client/build/index.html"));
// });

// serve static assets in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("./client/build"));
};

app.use(routes);

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on http://localhost:${PORT}!`);
});