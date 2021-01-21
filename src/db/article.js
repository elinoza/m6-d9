module.exports = (sequelize, DataTypes) => {


  
  const Article = sequelize.define("article", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      head_Line: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subhead : {
        type: DataTypes.STRING,
        allowNull: true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cover: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
   Article.associate = (models) => {
    Article.belongsTo(models.Category),
    Article.belongsTo(models.Author),
    Article.hasMany(models.Reaction)
    
  
  };
    
    return Article;
  };
  