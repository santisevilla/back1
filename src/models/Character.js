const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database.js");
const { Movie } = require("./Movie.js");

const Character = sequelize.define(
  "characters",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:
        "https://image.shutterstock.com/image-vector/default-avatar-profile-icon-vector-260nw-1909596082.jpg",
    },
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    history: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

Character.hasMany(Movie, {
  foreignKey: "characterId",
  sourceKey: "id",
});

Movie.belongsTo(Character, {
  foreignKey: "characterId",
  targetId: "id",
});

module.exports = Character;
