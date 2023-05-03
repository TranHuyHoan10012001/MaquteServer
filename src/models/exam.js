"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Exam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Exam.init(
    {
      subject: DataTypes.STRING,
      category: DataTypes.STRING,
      questions: DataTypes.STRING,
      timeLimit: DataTypes.INTEGER,
      maxScore: DataTypes.INTEGER,
      file: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Exam",
    }
  );
  return Exam;
};
