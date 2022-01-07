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
    lat: {
      allowNull: false,
      type: DataTypes.DECIMAL
    },
    lng: {
      allowNull: false,
      type: DataTypes.DECIMAL
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL
    }
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Spot;
};
