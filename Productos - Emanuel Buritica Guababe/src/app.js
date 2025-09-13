// src/app.js

const express = require("express");
const app = express();
const { connectDB, sequelize } = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

app.use(express.json());

// Importar rutas de productos
const productRoutes = require("./routes/productRoutes");
app.use("/productos", productRoutes);

// Configuración de Swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Productos",
      version: "1.0.0",
      description: "Documentación de la API para la gestión de productos.",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor de desarrollo",
      },
    ],
    components: {
      schemas: {
        Producto: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              description: "ID del producto",
            },
            nombre: {
              type: "string",
              description: "Nombre del producto",
            },
            descripcion: {
              type: "string",
              description: "Descripción del producto",
            },
            precio: {
              type: "number",
              format: "float",
              description: "Precio del producto",
            },
            stock: {
              type: "integer",
              description: "Cantidad disponible en inventario",
            },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"], // aquí documentas con Swagger en las rutas
};

const swaggerSpec = swaggerJsdoc(options);

// Endpoint para ver el JSON de la documentación
app.get("/swagger-json", (req, res) => {
  res.json(swaggerSpec);
});

// Interfaz Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Sincronizar con Sequelize y arrancar servidor
sequelize
  .sync()
  .then(() => {
    connectDB().then(() => {
      app.listen(3000, () => {
        console.log("Servidor corriendo en http://localhost:3000");
        console.log("Swagger en http://localhost:3000/api-docs");
      });
    });
  })
  .catch((error) => {
    console.error(
      "Error al sincronizar modelos o conectar la base de datos:",
      error
    );
    process.exit(1);
  });

module.exports = app;
