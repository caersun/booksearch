const express = require("express");
// const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static assets in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

// TODO: define API routes
app.use(routes);

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booksearch", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on http://localhost:${PORT}!`);
});