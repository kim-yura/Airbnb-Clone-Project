'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: {
      allowNull: false,
      type: DataTypes.STRING
    },
    address: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING
    },
    zipcode: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING(5000)
    },
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING(500)
    }
  }, {});
  Spot.associate = function (models) {
    // associations can be defined here
    Spot.belongsTo(models.User, { foreignKey: 'userId' });
    Spot.hasMany(models.Booking, { foreignKey: 'spotId' });
    Spot.hasMany(models.Review, { foreignKey: 'spotId' });
  };
  return Spot;
};
