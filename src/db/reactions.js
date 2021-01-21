module.exports = (sequelize, DataTypes) => {
    const Reaction = sequelize.define(
      "Reaction",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        text: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        isClapped: {
            type: DataTypes.BOOLEAN ,
            allowNull: false,
          },
      },
      {
        timestamps: false,
      }
    );
  
    Reaction.associate = (models) => {
      Reaction.hasMany(models.Article);
      Reaction.hasMany(models.Author);
    };
    return Reaction;
  };
  