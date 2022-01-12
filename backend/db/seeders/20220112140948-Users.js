'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: '1@test.com',
        username: 'DemoDami',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: '2@test.com',
        username: 'AliasAaron',
        hashedPassword: bcrypt.hashSync('passwordAaron'),
      },
      {
        email: '3@test.com',
        username: 'BobtheBanana',
        hashedPassword: bcrypt.hashSync('passwordBob'),
      },
      {
        email: '4@test.com',
        username: 'CosmicCharlie',
        hashedPassword: bcrypt.hashSync('passwordCharlie'),
      },
      {
        email: '5@test.com',
        username: 'EuniceTheExplorer',
        hashedPassword: bcrypt.hashSync('passwordEunice'),
      },
      {
        email: '6@test.com',
        username: 'GrayGary',
        hashedPassword: bcrypt.hashSync('passwordGary'),
      },
      {
        email: '7@test.com',
        username: 'HyeminKim',
        hashedPassword: bcrypt.hashSync('passwordHyemin'),
      },
      {
        email: '8@test.com',
        username: 'InigoMontoya',
        hashedPassword: bcrypt.hashSync('passwordInigo'),
      },
      {
        email: '9@test.com',
        username: 'JonghoonLovesTravel',
        hashedPassword: bcrypt.hashSync('passwordJonghoon'),
      },
      {
        email: '10@test.com',
        username: 'ylleKelly',
        hashedPassword: bcrypt.hashSync('passwordKelly'),
      },
      {
        email: '11@test.com',
        username: 'ItsaLisa',
        hashedPassword: bcrypt.hashSync('passwordLisa'),
      },
      {
        email: '12@test.com',
        username: 'MarkoPolo',
        hashedPassword: bcrypt.hashSync('passwordMark'),
      },
      {
        email: '13@test.com',
        username: 'IncognitoIris',
        hashedPassword: bcrypt.hashSync('passwordIris'),
      },
      {
        email: '14@test.com',
        username: 'KittyKryptonite',
        hashedPassword: bcrypt.hashSync('passwordKitty'),
      },
      {
        email: '15@test.com',
        username: 'BorkBorkDude',
        hashedPassword: bcrypt.hashSync('passwordBork'),
      },
      {
        email: '16@test.com',
        username: 'Floradorable',
        hashedPassword: bcrypt.hashSync('passwordFlora'),
      },
      {
        email: '17@test.com',
        username: 'ShaquilleOatmeal',
        hashedPassword: bcrypt.hashSync('passwordShaquille'),
      },
      {
        email: '18@test.com',
        username: 'FedoraTheExplorer',
        hashedPassword: bcrypt.hashSync('passwordFedora'),
      },
      {
        email: '19@test.com',
        username: 'SomeUsername',
        hashedPassword: bcrypt.hashSync('passwordSome'),
      },
      {
        email: '20@test.com',
        username: 'Avocadorable',
        hashedPassword: bcrypt.hashSync('passwordAvocadorable'),
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users');
  }
};
