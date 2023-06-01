CREATE DATABASE usuarios;

USE usuarios;

CREATE TABLE `personas` (
  `cedula` int PRIMARY KEY,
  `nombre` varchar(255),
  `apellido` varchar(255),
  `edad` int,
  `fecha_nacimiento` date
);

INSERT INTO personas (cedula, nombre, apellido, edad, fecha_nacimiento)
VALUES
  (123456, 'Juan', 'Pérez', 30, '1992-05-10'),
  (987654, 'María', 'Gómez', 25, '1997-09-15'),
  (456789, 'Pedro', 'López', 40, '1982-02-20'),
  (789123, 'Ana', 'Martínez', 35, '1986-11-05'),
  (654321, 'Laura', 'Rodríguez', 28, '1993-07-25'),
  (111111, 'Carlos', 'García', 45, '1978-12-15'),
  (222222, 'Sofía', 'Hernández', 32, '1989-08-08'),
  (333333, 'Manuel', 'Torres', 55, '1966-04-03'),
  (444444, 'Elena', 'Vargas', 27, '1994-10-18'),
  (555555, 'Luis', 'Ramírez', 31, '1990-03-27'),
  (666666, 'Fernanda', 'López', 29, '1993-06-12'),
  (777777, 'Gabriel', 'Sánchez', 33, '1988-09-28'),
  (888888, 'Isabella', 'González', 24, '1999-02-05'),
  (999999, 'Mateo', 'Jiménez', 26, '1997-11-20'),
  (101010, 'Valentina', 'Vega', 22, '2001-04-15');