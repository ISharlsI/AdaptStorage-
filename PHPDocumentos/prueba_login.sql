-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 03-11-2021 a las 01:56:31
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
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `archivos`
--

INSERT INTO `archivos` (`id`, `titulo`, `tipo`, `tamanio`, `ruta`) VALUES
(8, 'asda.docx', 'docx', '0', 'uploads/653042-asda.docx'),
(9, 'asda.docx', 'docx', '0', 'uploads/asda.docx'),
(10, 'asda.docx', 'docx', '0', 'uploads/asda.docx'),
(11, 'asda.docx', 'docx', '0', 'uploads/asda.docx');

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
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`idTipoUsuario`, `etiquetaTipoUsuario`, `descripcionTipoUsuario`) VALUES
(1, 'Administrador', 'Jefe del departamento'),
(2, 'Desarrollo', 'Lider de los desarrollos '),
(3, 'Diseño', 'Encargado de generar las estructuras y diseños de los aplicativos');

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `clave`, `nombre`, `idTipoUsuario`) VALUES
(2, 'correo1@hotmail.com', '$2y$10$8gNyRNWhiZisIajKckP8a.su2NmjRG1oA1gFjRly3VuaUk.wWrIJm', 'Carlos Alberto Conchas Montañez', 2),
(3, '', '$2y$10$TQv.xqZYsBI.Q8/0AKIEeeqxvAp9s6/8IkcIuY/Uv5UQ9zX60Ko5W', '', 2),
(4, 'asdasd', '$2y$10$2ynT38Vimp4BGYPgjtsCTeGhuEew6osP3HtCLjGgf/ueo3YjdB2Eu', 'Carlos', 2),
(5, '', '$2y$10$Qau79o75dREB8ywcj/xtuuSCYbfxWvZcBTzeXJEHpOeK.mISjGigK', '', 2),
(6, '', '$2y$10$pxDKTguo34NlNA9VFc.dlOoc.HAGH3OUcm1W5PrOHPlayvHkKiKEW', '', 2),
(7, '', '$2y$10$hW9GlnmiggU2FbCds.aK9upRrMOMhsJidi.S9eLM/a7jp5fwNubNC', '', 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
