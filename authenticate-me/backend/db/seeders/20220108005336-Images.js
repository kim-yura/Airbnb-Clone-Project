'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Images', [
      {
        spotId: 1,
        url: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598357/0001.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 2,
        url: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598414/0002.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 3,
        url: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598422/0003.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 4,
        url: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598438/0004.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 5,
        url: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598455/0005.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 6,
        url: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598463/0006.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 7,
        url: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598470/0007.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 8,
        url: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598488/0008.avif',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 9,
        url: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598498/0009.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 10,
        url: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598509/0010.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 11,
        url: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598515/0011.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 12,
        url: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598544/0012.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 13,
        url: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598557/0013.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 14,
        url: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598565/0014.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 15,
        url: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598608/0015.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 16,
        url: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598708/0016.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 17,
        url: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598729/0017.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 18,
        url: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598742/0018.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 19,
        url: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598793/0019.webp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 20,
        url: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598810/0020.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
