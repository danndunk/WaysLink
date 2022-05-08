"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_link.init(
    {
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      profile: DataTypes.STRING,
      templateID: DataTypes.INTEGER,
      uniqueLink: DataTypes.STRING,
      viewCount: DataTypes.INTEGER,
      links: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "tb_link",
    }
  );
  return tb_link;
};
