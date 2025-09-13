const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db'); // Importa la instancia 


// Definición del modelo Producto
const Product = sequelize.define("Product", {
  id_producto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "productos", 
  timestamps: false,    
});

module.exports = Product;
