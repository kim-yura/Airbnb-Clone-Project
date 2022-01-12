'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        spotId: 1,
        userId: 2,
        review: "Room was ok. Not much to do here, but I was visiting friends and they didn't have a guest room.",
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 2,
        userId: 1,
        review: "Super comfortable, and I enjoyed how close it was to Olympic National Park! If you're wanting to enjoy a quick break and enjoy the outdoors, highly recommend.",
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 3,
        userId: 5,
        review: "Comfy, clean, polite host.",
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 4,
        userId: 17,
        review: "The bed wasn't the most comfortable, but the host was lovely and recommended some great breakfast spots for me.",
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 5,
        userId: 19,
        review: "Must stay if you want to experience all that Times Square has to offer!",
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 6,
        userId: 8,
        review: "Pretty nice spot. Thanks for the coffee suggestions!",
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 7,
        userId: 13,
        review: "The bathroom wasn't very clean 😬",
        score: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 8,
        userId: 11,
        review: "Great affordable spot. Good public transport options to Manhattan to see the sights.",
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 9,
        userId: 15,
        review: "Needed somewhere affordable while I looked for a new apartment, this place was clean and within walking distance of my new job.",
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 10,
        userId: 4,
        review: "Excellent beach-side room, perfect for a weekend getaway!",
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 11,
        userId: 7,
        review: "The location was great, and the room was clean. Didn't see the host much, which is fine by me.",
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 12,
        userId: 16,
        review: "A bit overpriced for the amenities, but comfortable enough.",
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 13,
        userId: 9,
        review: "Cute decor, but the host kept trying to take me out for coffee, which I thought was a bit weird? They were nice though.",
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 14,
        userId: 10,
        review: "Comfty, clean, just what I needed.",
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 15,
        userId: 3,
        review: "Great for the art lover! Conveniently located in the downtown heart.",
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 16,
        userId: 14,
        review: "The twin beds were super nice for me and my backpacking buddy. No awkward bed-sharing!",
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 17,
        userId: 6,
        review: "I needed a convenient location for my graduate program interviews. This worked out great, thanks!",
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 18,
        userId: 12,
        review: "Great place if you don't mind not sleeping. Gets pretty noisy at night.",
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 19,
        userId: 20,
        review: "Cute clean spot located right in the middle of it all! If you're in NOLA to have a good time, definitely check this spot out.",
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 20,
        userId: 18,
        review: "Had a 'rocking' good time in Music City! Thanks for the Spot and being a fantastic host!",
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
