'use strict'
module.exports = {
  // Método up para crear la tabla Restaurants y definir sus columnas
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Restaurants', {
      // Columna de identificación de restaurantes
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // Columna de nombre de restaurante (requerida)
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      // Columna de descripción de restaurante
      description: {
        type: Sequelize.TEXT
      },
      // Columna de dirección de restaurante (requerida)
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      // Columna de código postal de restaurante (requerida)
      postalCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      // Columna de URL de restaurante
      url: {
        type: Sequelize.STRING
      },
      // Columna de costo de envío de restaurante (requerida)
      shippingCosts: {
        allowNull: false,
        defaultValue: 0.0,
        type: Sequelize.DOUBLE
      },
      // Columna de tiempo promedio de servicio de restaurante
      averageServiceMinutes: {
        allowNull: true,
        type: Sequelize.DOUBLE
      },
      // Columna de correo electrónico de restaurante
      email: {
        type: Sequelize.STRING
      },
      // Columna de número de teléfono de restaurante
      phone: {
        type: Sequelize.STRING
      },
      // Columna de logo de restaurante
      logo: {
        type: Sequelize.STRING
      },
      // Columna de imagen principal de restaurante
      heroImage: {
        type: Sequelize.STRING
      },
      // Columna de fecha de creación de restaurante (por defecto la fecha actual)
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      // Columna de fecha de última actualización de restaurante (por defecto la fecha actual)
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      // Columna de estado de restaurante con valores predefinidos (por defecto 'offline')
      status: {
        type: Sequelize.ENUM,
        values: [
          'online',
          'offline',
          'closed',
          'temporarily closed'
        ],
        defaultValue: 'offline'
      },
      // Columna de identificación de usuario asociado al restaurante (requerida)
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: {
            tableName: 'Users'
          },
          key: 'id'
        }
      },
      // Columna de identificación de categoría de restaurante asociada al restaurante (requerida)
      restaurantCategoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'RestaurantCategories'
          },
          key: 'id'
        }
      }
    })
  },

  // Método down para eliminar la tabla Restaurants
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Restaurants')
  }
}
