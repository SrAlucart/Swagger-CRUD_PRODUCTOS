const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: API para gestionar los productos del supermercado
 */

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtiene la lista de todos los productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Lista de productos obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Producto'
 *       500:
 *         description: Error del servidor
 */
router.get("/", productController.getAllProducts);

/**
 * @swagger
 * /productos/{id}:
 *   get:
 *     summary: Obtiene un producto por su ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get("/:id", productController.getProductById);

/**
 * @swagger
 * /productos:
 *   post:
 *     summary: Crea un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       201:
 *         description: Producto creado exitosamente.
 *       400:
 *         description: Datos incompletos
 *       500:
 *         description: Error del servidor
 */
router.post("/", productController.createProduct);

/**
 * @swagger
 * /productos/{id}:
 *   put:
 *     summary: Actualiza un producto por su ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       200:
 *         description: Producto actualizado correctamente.
 *       400:
 *         description: Datos incompletos
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error del servidor
 */
router.put("/:id", productController.updateProduct);

/**
 * @swagger
 * /productos/{id}:
 *   delete:
 *     summary: Elimina un producto por su ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado correctamente.
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete("/:id", productController.deleteProduct);

module.exports = router;
