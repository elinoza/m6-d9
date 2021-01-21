
const express = require("express");
require("dotenv").config();
 const articleRouter = require("./services/article");
// const cartsRouter = require("./services/category");
// const authorsRouter = require("./services/author");
// const reactionsRouter = require("./services/reaction");
const db = require("./db");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json());
server.use("/article", articleRouter);
// server.use("/category", cartsRouter);
// server.use("/author", authorsRouter);
// server.use("/reaction", reactionsRouter);
db.sequelize.sync({ force: false}).then((result) => {
  server.listen(process.env.PORT || 5000, () => {
    console.log("server is running on port ", process.env.PORT || 5000);
  });
});
