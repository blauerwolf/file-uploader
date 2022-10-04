'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
      return Promise.all([
          queryInterface.changeColumn('tratamiento', 'nombre', {
              type: Sequelize.TEXT,
              allowNull: false,
          }),
      ]);
    },

    down: (queryInterface, Sequelize) => {
      return Promise.all([
        queryInterface.changeColumn('tratamiento', 'nombre', {
          type: Sequelize.STRING,
          allowNull: false,
        })
      ])
    }
};
