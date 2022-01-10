'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    spotId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    review: {
      type: DataTypes.STRING
    },
    score: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: 'userId' });
    Review.belongsTo(models.Spot, { foreignKey: 'spotId' });
  };
  return Review;
};
