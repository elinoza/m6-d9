const express = require("express");
const Article = require("../../db").Article;
const Category = require("../../db").Category;
const Author = require("../../db").Author;
const Reaction = require("../../db").Reaction;
const { Op } = require("sequelize");
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Article.findAll({
        include:[Author, Category,Reaction],
        where: req.query.name
          ? { head_Line: { [Op.iLike]: "%" + req.query.name + "%" } }
          : {}
        ,offset: parseInt(req.query.offset) | 0,
        limit: parseInt(req.query.limit) | 10,
      });
      res.send(data);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const newElement = await Article.create(req.body);
      res.send(newElement);
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const data = await Article.findByPk(req.params.id);
      res.send(data);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .put(async (req, res, next) => {
    try {
      const updatedData = await Article.update(req.body, {
        returning: true,
        plain: true,
        where: {
          id: req.params.id,
        },
      });
      res.send(updatedData[1]);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
      Article.destroy({ where: { id: req.params.id } }).then((rowsDeleted) => {
        if (rowsDeleted > 0) res.send("Deleted");
        else res.send("no match");
      });
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

module.exports = router;
