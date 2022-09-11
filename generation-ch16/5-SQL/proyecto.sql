CREATE DATABASE proyecto;
USE proyecto;

CREATE TABLE usuario(
usuario_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(65) NOT NULL,
correo VARCHAR(40) NOT NULL,
direccion VARCHAR(70) NOT NULL,
telefono VARCHAR(12) NOT NULL
);

CREATE TABLE carrito (
orden_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
usuario_id INT NOT NULL,
producto_id INT NOT NULL,
cantidad_productos INT NOT NULL,
fecha_compra DATE NOT NULL,
total DECIMAL(5,2) NOT NULL
);

CREATE TABLE producto( 
producto_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
precio DECIMAL(8,2) NOT NULL,
descripcion VARCHAR(100) NOT NULL
);

CREATE TABLE pivote(
pivote_id INT NOT NULL PRIMARY KEY,
producto_id INT NOT NULL
);

ALTER TABLE pivote
ADD CONSTRAINT fk_privote_producto
FOREIGN KEY (producto_id)
REFERENCES producto(producto_id);

ALTER TABLE carrito
ADD CONSTRAINT fk_carrito_pivote
FOREIGN KEY (producto_id)
REFERENCES pivote(producto_id);

-- DROP DATABASE proyecto;
