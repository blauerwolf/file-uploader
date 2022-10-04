'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.renameColumn('tratamiento', 'nombre', 'descripcion')
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameColumn('tratamiento', 'descripcion', 'nombre')
    ])
  }
};
