CREATE DATABASE ejercicio;
USE ejercicio; 



CREATE TABLE instructor(
instructor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
edad INT NOT NULL,
cumpleanios DATE NOT NULL,
rfc VARCHAR(255) NOT NULL,
supervisor VARCHAR(255) NOT NULL, 
sesiones VARCHAR(255) NOT NULL
);

CREATE TABLE alumno(
alumno_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
CURP VARCHAR(255) NOT NULL,
RFC VARCHAR(255),
nivel_ingles VARCHAR (255) NOT NULL,
amonestaciones INT NOT NULL);

CREATE TABLE cohorte(
cohorte12_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
alumnos_id INT NOT NULL,
instructor_id INT NOT NULL,
numero_alumnos INT NOT NULL,
horario VARCHAR(255) NOT NULL,
tipo_sesiones VARCHAR(255) NOT NULL,
ciudad VARCHAR (255) NOT NULL);

CREATE TABLE equipo(
equipo_id INT NOT NULL PRIMARY KEY,
alumno_id INT NOT NULL,
nombre VARCHAR(255) NOT NULL,
cantidad_integrantes INT NOT NULL,
logo VARCHAR(255) NOT NULL
);


CREATE TABLE direccion(
direccion_id INT NOT NULL PRIMARY KEY,
alumno_id INT NOT NULL,
calle VARCHAR(255) NOT NULL,
pais VARCHAR(255) NOT NULL,
cp INT NOT NULL
);




ALTER TABLE cohorte
ADD CONSTRAINT fk_cohorte_alumno
FOREIGN KEY (alumnos_id)
REFERENCES alumno (alumno_id);

ALTER TABLE cohorte
ADD CONSTRAINT fk_cohorte_instructor
FOREIGN KEY (instructor_id)
REFERENCES instructor(instructor_id);

ALTER TABLE equipo
ADD CONSTRAINT fk_equipo_alumno
FOREIGN KEY (alumno_id)
REFERENCES alumno(alumno_id);

ALTER TABLE direccion
ADD CONSTRAINT fk_direccion_alumno
FOREIGN KEY (alumno_id)
REFERENCES alumno(alumno_id);


INSERT INTO alumno(alumno_id,nombre,edad,CURP,RFC,nivel_ingles,amonestaciones)
VALUES(1,'iker',20,'MANI011021HDFRGKA1','MANI011021K31','C2',0),
(2,'Brandon',25,'BRANI011021HDFRGKA1','BRAN011021K31','C1',2),
(3,'ZUL',20,'ZULI011021HDFRGKA1','ZUL011021K31','C1',0),
(4,'Maciel',24,'BRANI011021HDFRGKA1','BRAN011021K31','C1',1);

INSERT INTO instructor(nombre, edad, cumpleanios, RFC,supervisor,sesiones)
VALUES ('Raul', 35, '2022-09-05', 'MAISJDISJFKAJKS25','MARINA','COHORTE 16'),
('victor', 38, '2022-10-05', 'VICJDISJFKAJKS25','MARINA','COHORTE 16');

INSERT INTO equipo(equipo_id,alumno_id,nombre,cantidad_integrantes,logo)
VALUES(1,2,'SHADES',7,'SHADES.SVG');

-- DROP DATABASE ejercicio;

/*
CREATE TABLE cohorte(
cohorte12_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
alumnos_id INT NOT NULL,
instructor_id INT NOT NULL,
numero_alumnos INT NOT NULL,
horario VARCHAR(255) NOT NULL,
tipo_sesiones VARCHAR(255) NOT NULL,
ciudad VARCHAR (255) NOT NULL);

CREATE TABLE instructor(
instructor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
cumpleanios DATE NOT NULL,
RFC VARCHAR(255) NOT NULL,
supervisor VARCHAR(255) NOT NULL,
sesiones VARCHAR(255) NOT NULL
);


CREATE TABLE alumno(
alumno__id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
CURP VARCHAR(255) NOT NULL,
RFC VARCHAR(255),
nivel_ingles VARCHAR(255) NOT NULL,
amonestaciones INT NOT NULL
);


CREATE TABLE equipo(
equipo_id INT NOT NULL PRIMARY KEY,
alumno_id INT NOT NULL,
nombre VARCHAR(255) NOT NULL,
cantidad_integrantes INT NOT NULL,
logo VARCHAR(255) NOT NULL
);


CREATE TABLE direccion(
direccion_id INT NOT NULL PRIMARY KEY,
alumno_id INT NOT NULL,
calle VARCHAR(255) NOT NULL,
pais VARCHAR(255) NOT NULL,
cp INT NOT NULL
);

INSERT INTO alumno(nombre,edad,CURP,RFC,nivel_ingles,amonestaciones)
VALUES('iker',20,'MANI011021HDFRGKA1','MANI011021K31','C2',0),
('Brandon',25,'BRANI011021HDFRGKA1','BRAN011021K31','C1',2),
('ZUL',20,'ZULI011021HDFRGKA1','ZUL011021K31','C1',0),
('Maciel',24,'BRANI011021HDFRGKA1','BRAN011021K31','C1',1);




/*
INSERT INTO instructor(nombre, edad, cumpleanios, RFC,supervisor,sesiones)
VALUES ('Raul', 35, '2022-09-05', 'MAISJDISJFKAJKS25','MARINA','COHORTE 16'),
('victor', 38, '2022-10-05', 'VICJDISJFKAJKS25','MARINA','COHORTE 16');


ALTER TABLE equipo
ADD CONSTRAINT fk_equipo_alumno
FOREIGN KEY (alumno_id)
REFERENCES alumno(alumno_id);
/*
INSERT INTO equipo(equipo_id,alumno_id,nombre,cantidad_integrantes,logo)
VALUES(1,2,'SHADES',7,'SHADES.SVG');


ALTER TABLE cohorte
ADD CONSTRAINT fk_cohorte_alumno
FOREIGN KEY (alumno_id)
REFERENCES alumno(alumno_id);

ALTER TABLE cohorte
ADD CONSTRAINT fk_cohorte_instructor
FOREIGN KEY (instructor_id)
REFERENCES instructor(instructor_id);
--




ALTER TABLE direccion
ADD CONSTRAINT fk_alumno_direccion
FOREIGN KEY (alumno_id)
REFERENCES alumno(alumno_id);

*/
-- DROP DATABASE ejercicio;
