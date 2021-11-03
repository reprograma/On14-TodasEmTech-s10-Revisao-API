const express = require("express");
const cors = require("cors");
const router = require("./routes/pracasRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
module.exports = app;
