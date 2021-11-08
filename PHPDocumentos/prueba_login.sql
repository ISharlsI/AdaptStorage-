-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-11-2021 a las 23:53:03
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba_login`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivos`
--

CREATE TABLE `archivos` (
  `id` int(100) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `tamanio` decimal(65,0) NOT NULL,
  `ruta` varchar(100) NOT NULL,
  `fecha` date DEFAULT NULL,
  `contenido` longtext NOT NULL,
  `nivel_seguridad` int(100) NOT NULL,
  `namePropietario` varchar(1000) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `archivos`
--

INSERT INTO `archivos` (`id`, `titulo`, `tipo`, `tamanio`, `ruta`, `fecha`, `contenido`, `nivel_seguridad`, `namePropietario`) VALUES
(7, 'prueba_login', 'sql', '7705', 'uploads/prueba_login.sql', '2021-11-07', 'Prueba', 5, '1'),
(8, 'estadisticas', 'pdf', '368196', 'uploads/estadisticas.pdf', '2021-11-07', 'Prueba', 1, 'Carlos Alberto Conchas'),
(9, 'prueba_login', 'sql', '7705', 'uploads/prueba_login.sql', '2021-11-07', 'Prueba', 1, 'Juan'),
(10, 'estadisticas', 'pdf', '368196', 'uploads/estadisticas.pdf', '2021-11-07', 'Prueba', 1, 'Juan'),
(11, 'estadisticas', 'pdf', '368196', 'uploads/estadisticas.pdf', '2021-11-07', 'Prueba', 1, 'Juan'),
(12, '3er_avan_1_jgup-(bases-de-datos)', 'pdf', '1386831', 'uploads/3er_avan_1_jgup-(bases-de-datos).pdf', '2021-11-07', 'Prueba', 5, '1'),
(13, 'horario', 'xlsx', '11249', 'uploads/horario.xlsx', '2021-11-07', 'Prueba', 2, 'Juan Guillermo'),
(14, 'algoritmos-de-ordenamiento-(juan-uribe---19310177)', 'pdf', '268995', 'uploads/algoritmos-de-ordenamiento-(juan-uribe---19310177).pdf', '2021-11-08', 'Prueba', 1, 'Daniel Cervantes Hernandez Palma José Porfirio Hermenejildo de la Santisima Trinidad'),
(15, '3ro_avan_2_jgup-(des.-web)', 'pdf', '11884156', 'uploads/3ro_avan_2_jgup-(des.-web).pdf', '2021-11-08', 'Prueba', 1, 'Daniel Cervantes Hernandez Palma José Porfirio Hermenejildo de la Santisima Trinidad'),
(16, '2do_prac_2.7_jgup-(des.-web)', 'pdf', '1991290', 'uploads/2do_prac_2.7_jgup-(des.-web).pdf', '2021-11-08', 'Prueba', 4, 'Daniel Cervantes Hernandez Palma José Porfirio Hermenejildo de la Santisima Trinidad'),
(17, 'arrempujala,-arremangala-si,-arrempujala,-arremangala-no,-arrempujala,-arremangala-si,-arrempujala,-', 'txt', '0', 'uploads/arrempujala,-arremangala-si,-arrempujala,-arremangala-no,-arrempujala,-arremangala-si,-arrem', '2021-11-08', 'Prueba', 4, 'Daniel Cervantes Hernandez Palma José Porfirio Hermenejildo de la Santisima Trinidad');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_usuario`
--

CREATE TABLE `tipo_usuario` (
  `idTipoUsuario` int(128) NOT NULL,
  `etiquetaTipoUsuario` varchar(128) NOT NULL,
  `descripcionTipoUsuario` varchar(256) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`idTipoUsuario`, `etiquetaTipoUsuario`, `descripcionTipoUsuario`) VALUES
(1, 'Nivel 1', 'Nivel de seguridad 1'),
(2, 'Nivel 2', 'Nivel de seguridad 2'),
(3, 'Nivel 3', 'Nivel de seguridad 3'),
(4, 'Nivel 4', 'Nivel de seguridad 4'),
(5, 'Nivel 5', 'Administrador ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL COMMENT 'Identificador único para el usuario',
  `usuario` varchar(30) NOT NULL COMMENT 'correo electrónico',
  `clave` varchar(130) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `idTipoUsuario` int(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `clave`, `nombre`, `idTipoUsuario`) VALUES
(7, '1', '$2y$10$5AZ.ldmyO7IYGhYlkTCrYO0TA35wWL/zLSdGR9hs34IwJU40ZiwNy', '1', 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `archivos`
--
ALTER TABLE `archivos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  ADD PRIMARY KEY (`idTipoUsuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `archivos`
--
ALTER TABLE `archivos`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  MODIFY `idTipoUsuario` int(128) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador único para el usuario', AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
