'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@email.com',
        username: 'DemoDami',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'aaron@test.com',
        username: 'AliasAaron',
        hashedPassword: bcrypt.hashSync('passwordAaron'),
      },
      {
        email: 'iris@test.com',
        username: 'IncognitoIris',
        hashedPassword: bcrypt.hashSync('passwordIris'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['DemoDami', 'AliasAaron', 'IncognitoIris'] }
    }, {});
  }
};
