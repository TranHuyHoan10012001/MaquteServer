"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ExamAnalysts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ExamAnalysts.init(
    {
      examId: DataTypes.INTEGER,
      highGrade: DataTypes.INTEGER,
      commonGrade: DataTypes.INTEGER,
      lowGrade: DataTypes.INTEGER,
      comments: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ExamAnalysts",
    }
  );
  return ExamAnalysts;
};
