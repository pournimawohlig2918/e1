const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("bodyparser");

const app = express();
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

// log requests
app.use(morgan("tiny"));

// parse request to body-parser

//app.use
app.get("/", (req, res) => {
    res.send("Crud Application");
});

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
