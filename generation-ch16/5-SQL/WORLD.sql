USE world;
SELECT * FROM country;
SELECT Name, Population FROM country ORDER BY Population DESC;

SELECT Name, Population FROM country WHERE Name = 'MEXICO';

SELECT 5 + 5;

SELECT Name as Nombre_de_pais, Population AS 'Poblacion del Pais' FROM country order by nombre_de_pais desc;

SELECT distinct Continent FROM country;

SELECT * FROM country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy DESC;

SELECT * FROM country where Continent = 'North America';

