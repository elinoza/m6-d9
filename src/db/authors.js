module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define(
      "author",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
          },
      },
      {
        timestamps: false,
      }
    );
  
    Author.associate = (models) => {
      Author.hasMany(models.Article);
      Author.hasMany(models.Reaction)
    };
    return Author;
  };
  