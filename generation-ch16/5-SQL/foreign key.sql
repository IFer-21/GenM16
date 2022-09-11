use tienda;

select * from clientes;

CREATE TABLE compra(
orden_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
cliente_ID INT NOT NULL,
fecha_compra DATE NOT NULL,
total DECIMAL(5,2) NOT NULL,
cantidad_productos INT NOT NULL
);

SELECT * FROM compra;

-- AGREGAR LLAVE FORANEA
ALTER TABLE compra
ADD CONSTRAINT fk_clientes_compra
FOREIGN KEY (cliente_ID)
REFERENCES clientes(cliente_ID);

/* BORRAR LLAVE FORANEA
ALTER TABLE compra
DROP FOREIGN KEY fk_clientes_compra;
*/

INSERT INTO compra(cliente_ID,fecha_compra, total, cantidad_productos)
VALUES (1, '2022-09-06', 500, 1);

SELECT * FROM compra;

INSERT INTO compra(cliente_id, fecha_compra, total, cantidad_productos)
VALUES (2, '2022-09-05', 210, 5);

INSERT INTO compra(cliente_ID, fecha_compra, total, cantidad_productos)
VALUES (1, '2022-09-06', 300.50, 2);

