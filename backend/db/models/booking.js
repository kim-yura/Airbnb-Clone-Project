'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    spotId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    startDate: {
      allowNull: false,
      type: DataTypes.DATE
    },
    endDate: {
      allowNull: false,
      type: DataTypes.DATE
    },
    reasonForStay: {
      allowNull: false,
      type: DataTypes.STRING(1000)
    }
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.Spot, { foreignKey: 'spotId' });
    Booking.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Booking;
};
