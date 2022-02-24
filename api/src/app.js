const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.js");
const server = express();

server.use(cors({origin: "http://localhost:3000", credentials: true}));
server.use("/api", routes);

module.exports = server;