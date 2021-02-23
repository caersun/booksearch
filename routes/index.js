const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// if no api routes hit, send React app
router.use((req, res) => {
    console.log("in routes ~ router.use if no api hit? ~ req", req);
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;