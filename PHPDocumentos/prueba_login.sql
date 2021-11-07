-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-11-2021 a las 22:21:58
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
  `contenido` longtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `archivos`
--

INSERT INTO `archivos` (`id`, `titulo`, `tipo`, `tamanio`, `ruta`, `fecha`, `contenido`) VALUES
(20, 'respuestaensayo', 'txt', '0', 'uploads/respuestaensayo.txt', '2021-11-05', 'Prueba'),
(4, 'EnsayoVolumenes', 'docx', '2000', 'uploads/EnsayoVolumenes.docx', '2021-11-30', ''),
(3, 'Factura', 'pdf', '20', 'uploads/Factura.pdf', '2021-11-26', ''),
(2, 'ReporteDeMuestras', 'pdf', '62', 'uploads/ReporteDeMuestras.pdf', '2021-11-12', ''),
(1, 'Recetas', 'txt', '2', 'uploads/Recetas.txt', '2021-11-02', ''),
(21, 'respuestaensayo', 'txt', '0', 'uploads/respuestaensayo.txt', '2021-11-05', 'Prueba'),
(22, 'logo_adaptstorage_negro', 'png', '47798', 'uploads/logo_adaptstorage_negro.png', '2021-11-06', 'Prueba'),
(23, 'the-game-plan', 'txt', '3145', 'uploads/the-game-plan.txt', '2021-11-06', 'Prueba'),
(24, 'qwertyadj', 'mp3', '1920939', 'uploads/qwertyadj.mp3', '2021-11-06', 'Prueba'),
(25, 'qwertyadj', 'mp3', '1920939', 'uploads/qwertyadj.mp3', '2021-11-06', 'Prueba'),
(26, 'autorizando-ableton-live-offline', 'txt', '524', 'uploads/autorizando-ableton-live-offline.txt', '2021-11-06', 'Prueba'),
(27, 'guio??n-te??cnico_sonido_16jun21', 'xlsx', '112270', 'uploads/guio??n-te??cnico_sonido_16jun21.xlsx', '2021-11-06', 'Prueba'),
(28, 'wipefile', '7z', '127965', 'uploads/wipefile.7z', '2021-11-06', 'Prueba'),
(29, 'wipefile', '7z', '127965', 'uploads/wipefile.7z', '2021-11-06', 'Prueba'),
(30, 'wipefile', '7z', '127965', 'uploads/wipefile.7z', '2021-11-06', 'Prueba'),
(31, 'wipefile', '7z', '127965', 'uploads/wipefile.7z', '2021-11-06', 'Prueba'),
(32, 'wipefile', '7z', '127965', 'uploads/wipefile.7z', '2021-11-06', 'Prueba'),
(33, 'wipefile', '7z', '127965', 'uploads/wipefile.7z', '2021-11-06', 'Prueba'),
(34, 'wipefile', '7z', '127965', 'uploads/wipefile.7z', '2021-11-06', 'Prueba'),
(35, 'horario', 'jpg', '443193', 'uploads/horario.jpg', '2021-11-06', 'Prueba'),
(36, 'horario', 'jpg', '443193', 'uploads/horario.jpg', '2021-11-06', 'Prueba'),
(37, 'c.-tangana---demasiadas-mujeres', 'mp3', '4026906', 'uploads/c.-tangana---demasiadas-mujeres.mp3', '2021-11-06', 'Prueba'),
(38, 'c.-tangana---demasiadas-mujeres', 'mp3', '4026906', 'uploads/c.-tangana---demasiadas-mujeres.mp3', '2021-11-06', 'Prueba'),
(39, 'c.-tangana---demasiadas-mujeres', 'mp3', '4026906', 'uploads/c.-tangana---demasiadas-mujeres.mp3', '2021-11-06', 'Prueba'),
(40, 'c.-tangana---demasiadas-mujeres', 'mp3', '4026906', 'uploads/c.-tangana---demasiadas-mujeres.mp3', '2021-11-06', 'Prueba'),
(41, 'c.-tangana---demasiadas-mujeres', 'mp3', '4026906', 'uploads/c.-tangana---demasiadas-mujeres.mp3', '2021-11-06', 'Prueba'),
(42, 'c.-tangana---demasiadas-mujeres', 'mp3', '4026906', 'uploads/c.-tangana---demasiadas-mujeres.mp3', '2021-11-06', 'Prueba'),
(43, 'c.-tangana---demasiadas-mujeres', 'mp3', '4026906', 'uploads/c.-tangana---demasiadas-mujeres.mp3', '2021-11-07', 'Prueba'),
(44, 'ukulele-4---base-free-instrumental-ukulele-acustico-compor-improvisar-bpm-84', 'mp3', '3459443', 'uploads/ukulele-4---base-free-instrumental-ukulele-acustico-compor-improvisar-bpm-84.mp3', '2021-11-07', 'Prueba'),
(45, 'ukulele-4---base-free-instrumental-ukulele-acustico-compor-improvisar-bpm-84', 'mp3', '3459443', 'uploads/ukulele-4---base-free-instrumental-ukulele-acustico-compor-improvisar-bpm-84.mp3', '2021-11-07', 'Prueba'),
(46, 'ukulele-4---base-free-instrumental-ukulele-acustico-compor-improvisar-bpm-84', 'mp3', '3459443', 'uploads/ukulele-4---base-free-instrumental-ukulele-acustico-compor-improvisar-bpm-84.mp3', '2021-11-07', 'Prueba'),
(47, 'ukulele-4---base-free-instrumental-ukulele-acustico-compor-improvisar-bpm-84', 'mp3', '3459443', 'uploads/ukulele-4---base-free-instrumental-ukulele-acustico-compor-improvisar-bpm-84.mp3', '2021-11-07', 'Prueba'),
(48, 'juggernaut-(audio)', 'mp3', '3531730', 'uploads/juggernaut-(audio).mp3', '2021-11-07', 'Prueba'),
(49, 'autorizando-ableton-live-offline', 'txt', '524', 'uploads/autorizando-ableton-live-offline.txt', '2021-11-07', 'Prueba'),
(50, 'autorizando-ableton-live-offline', 'txt', '524', 'uploads/autorizando-ableton-live-offline.txt', '2021-11-07', 'Prueba'),
(51, 'autorizando-ableton-live-offline', 'txt', '524', 'uploads/autorizando-ableton-live-offline.txt', '2021-11-07', 'Prueba'),
(52, 'qr-dra-parra', 'png', '3465', 'uploads/qr-dra-parra.png', '2021-11-07', 'Prueba'),
(53, 'dra_icono', 'png', '566816', 'uploads/dra_icono.png', '2021-11-07', 'Prueba'),
(54, 'autorizando-ableton-live-offline', 'txt', '524', 'uploads/autorizando-ableton-live-offline.txt', '2021-11-07', 'Prueba');

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
(1, 'dani', '$2y$10$r51CNOKhrQ9zp/ky6Ct2YeEv5kc6au4HBw4WTH87UgrP2EFsA5frG', 'Daniel Vazquez Franco', 1),
(2, 'chats', '$2y$10$cuicSr3yZ0EMGRN7l57eqOEsJoWu39GH6b77aQTO8e/IwFdKioXcu', 'chats', 4),
(3, 'asd', '$2y$10$3g14mSWc.lGLLd7UJSiuourM2no23krYsHtjmotw4rSmUUJlRN41O', 'Juan Guillermo', 2),
(4, '1', '$2y$10$zl60LEiB.5XrpFONRuU7OO2HTi6rPuDhSXxNH7Szv7TOzFza7mfJO', '1', 5);

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
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  MODIFY `idTipoUsuario` int(128) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador único para el usuario', AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
