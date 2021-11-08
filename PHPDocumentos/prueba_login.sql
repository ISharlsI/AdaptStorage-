-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 07-11-2021 a las 23:59:33
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

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

DROP TABLE IF EXISTS `archivos`;
CREATE TABLE IF NOT EXISTS `archivos` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `tamanio` decimal(65,0) NOT NULL,
  `ruta` varchar(100) NOT NULL,
  `fecha` date DEFAULT NULL,
  `contenido` longtext NOT NULL,
  `nivel_seguridad` int(100) NOT NULL,
  `namePropietario` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `archivos`
--

INSERT INTO `archivos` (`id`, `titulo`, `tipo`, `tamanio`, `ruta`, `fecha`, `contenido`, `nivel_seguridad`, `namePropietario`) VALUES
(1, 'Respuestas', 'TXT', '2000', 'uploads/Respuestas.txt', '2021-11-11', '', 0, ''),
(5, 'prueba_login', 'sql', '7705', 'uploads/prueba_login.sql', '2021-11-07', 'Prueba', 0, ''),
(6, 'prueba_login', 'sql', '7705', 'uploads/prueba_login.sql', '2021-11-07', 'Prueba', 5, ''),
(7, 'prueba_login', 'sql', '7705', 'uploads/prueba_login.sql', '2021-11-07', 'Prueba', 5, '1'),
(8, 'estadisticas', 'pdf', '368196', 'uploads/estadisticas.pdf', '2021-11-07', 'Prueba', 1, 'Carlos Alberto Conchas'),
(9, 'prueba_login', 'sql', '7705', 'uploads/prueba_login.sql', '2021-11-07', 'Prueba', 1, 'Juan'),
(10, 'estadisticas', 'pdf', '368196', 'uploads/estadisticas.pdf', '2021-11-07', 'Prueba', 1, 'Juan'),
(11, 'estadisticas', 'pdf', '368196', 'uploads/estadisticas.pdf', '2021-11-07', 'Prueba', 1, 'Juan');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_usuario`
--

DROP TABLE IF EXISTS `tipo_usuario`;
CREATE TABLE IF NOT EXISTS `tipo_usuario` (
  `idTipoUsuario` int(128) NOT NULL AUTO_INCREMENT,
  `etiquetaTipoUsuario` varchar(128) NOT NULL,
  `descripcionTipoUsuario` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`idTipoUsuario`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

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

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador único para el usuario',
  `usuario` varchar(30) NOT NULL COMMENT 'correo electrónico',
  `clave` varchar(130) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `idTipoUsuario` int(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `clave`, `nombre`, `idTipoUsuario`) VALUES
(1, 'dani', '$2y$10$r51CNOKhrQ9zp/ky6Ct2YeEv5kc6au4HBw4WTH87UgrP2EFsA5frG', 'Daniel Vazquez Franco', 1),
(2, 'chats', '$2y$10$cuicSr3yZ0EMGRN7l57eqOEsJoWu39GH6b77aQTO8e/IwFdKioXcu', 'chats', 4),
(3, 'asd', '$2y$10$3g14mSWc.lGLLd7UJSiuourM2no23krYsHtjmotw4rSmUUJlRN41O', 'Juan Guillermo', 2),
(4, '1', '$2y$10$zl60LEiB.5XrpFONRuU7OO2HTi6rPuDhSXxNH7Szv7TOzFza7mfJO', '1', 5),
(5, 'a', '$2y$10$qSjPUutWqP/nkuqb9QmjQuMBGWawrTZaogBeV254Pv9l/5rYoPTuu', 'Carlos Alberto Conchas Montañez', 1),
(6, 'dab', '$2y$10$ZenG2G5USQPFwBZS66cr2uYMMZBNLzoSKdqvNPl7zZmF5cDQezFUa', 'Juan', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
