'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [
      {
        spotId: 1,
        userId: 2,
        startDate: new Date('March 14, 2022 16:00:00'),
        endDate: new Date('March 18, 2022 11:00:00')
      },
      {
        spotId: 1,
        userId: 3,
        startDate: new Date('March 20, 2022 16:00:00'),
        endDate: new Date('March 24, 2022 11:00:00')
      },
      {
        spotId: 1,
        userId: 4,
        startDate: new Date('April 1, 2022 16:00:00'),
        endDate: new Date('April 5, 2022 11:00:00'),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
