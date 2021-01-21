const { Sequelize, DataTypes } = require("sequelize");
const Article= require("./article");
const Category = require("./category");
const Reaction = require("./reactions");
 const Author= require("./authors");
const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: "postgres",
  }
);

const models = {
  Article: Article(sequelize, DataTypes),
    Category: Category(sequelize, DataTypes),
  Reaction: Reaction(sequelize, DataTypes),
 Author: Author(sequelize, DataTypes),
};

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

sequelize
  .authenticate()
  .then(() => console.log("Connection established"))
  .catch((e) => console.log("Connection failed ", e));

module.exports = models;
