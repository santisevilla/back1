const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database.js");
const { Genre } = require("./Genre.js");

const Movie = sequelize.define(
  "movies",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue:
        "https://image.shutterstock.com/image-vector/default-avatar-profile-icon-vector-260nw-1909596082.jpg",
    },
    title: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

Movie.hasMany(Genre, {
  foreignKey: "movieId",
  sourceKey: "id",
});

Genre.belongsTo(Movie, {
  foreignKey: "movieId",
  targetId: "id",
});

module.exports = Movie