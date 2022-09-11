CREATE DATABASE Generation;
USE Generation;
CREATE TABLE cohorte_16 (
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
companieros INT NOT NULL,
direccion VARCHAR(50) NOT NULL,
proyecto VARCHAR(50) NOT NULL
);

SELECT * FROM cohorte_16;

INSERT INTO cohorte_16(nombre, apellido, companieros, direccion,proyecto)
VALUES ('Iker', 'Fernando',7,'jardines','SHADES'),
('Pedro', 'Paramo', 5, 'Comala','idk'),
 ('Raul', 'Sanchez', 6, 'yucatan','dos'),
 ('Victor', 'Fernández',2, 'Guadalajar','cnco');
 
 SELECT * FROM cohorte_16;
 
 DELETE FROM cohorte_16
 WHERE alumno_id = 2;
 
 SELECT * FROM cohorte_16;

UPDATE cohorte_16
SET nombre = 'angelica',
apellido = 'rodriguez'
WHERE alumno_id = 4;

SELECT nombre,apellido FROM cohorte_16 ORDER BY apellido desc;


