'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.addColumn('usuario', 'password', {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue:  bcrypt.hashSync('password', 10)
        }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColum('usuario', 'npassword')
    ])

  }
};
