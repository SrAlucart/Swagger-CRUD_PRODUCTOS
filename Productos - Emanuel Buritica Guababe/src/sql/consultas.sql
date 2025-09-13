CREATE DATABASE supermercado;

USE supermercado;

 CREATE TABLE productos(
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL
);

 INSERT INTO productos (nombre, descripcion, precio, stock) VALUES
('Manzanas', 'Manzanas frescas y jugosas', 1.50, 100),
('Bananas', 'Bananas maduras y dulces', 0.75, 150),
('Leche', 'Leche entera de vaca', 0.90, 200),
('Pan', 'Pan integral recién horneado', 2.00, 50),
('Huevos', 'Docena de huevos frescos', 3.00, 80);

 SELECT * FROM productos;

