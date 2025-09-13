const Product = require("../models/productModel");

// Obtener todos los productos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

// Obtener un producto por ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
};

// Crear un nuevo producto
exports.createProduct = async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock } = req.body;
    if (!nombre || !precio || !stock) {
      return res.status(400).json({ error: "Nombre, precio y stock son obligatorios" });
    }
    const newProduct = await Product.create({ nombre, descripcion, precio, stock });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
};

// Actualizar un producto
exports.updateProduct = async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock } = req.body;
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    await product.update({ nombre, descripcion, precio, stock });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};

// Eliminar un producto
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    await product.destroy();
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
};