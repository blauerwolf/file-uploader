'use strict';


module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn('paciente', 'nacimiento', {
                type: Sequelize.DATE,
                allowNull: false,
            }),
        ]);
    },
    
    down: (queryInterface, Sequelize) => {
    }
}
