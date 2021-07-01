-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-07-2021 a las 03:30:58
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pqr`
--
CREATE DATABASE IF NOT EXISTS `pqr` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `pqr`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pqr`
--

CREATE TABLE `pqr` (
  `id` int(10) NOT NULL,
  `typepqr` varchar(150) NOT NULL,
  `user` varchar(150) NOT NULL,
  `description` varchar(150) NOT NULL,
  `state` varchar(150) DEFAULT NULL,
  `creationdate` varchar(150) DEFAULT NULL,
  `limitedate` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pqr`
--

INSERT INTO `pqr` (`id`, `typepqr`, `user`, `description`, `state`, `creationdate`, `limitedate`) VALUES(1, 'peticion', 'ivan', 'toy molesto', 'nuevo', 'Wed Jun 30 2021 20:21:56 GMT-0500 (hora estándar de Colombia)', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `username` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(150) DEFAULT NULL,
  `roles` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `roles`) VALUES(4, 'ivan', 'ivansoto@gmail.com', '$2y$10$yREBzNi3cA7DpWl4qc9UKeqyi.E7MZw9tXedNAz2UamXxPOLoL5ZO', 'admin');
INSERT INTO `users` (`id`, `username`, `email`, `password`, `roles`) VALUES(5, 'samir', 'samir@gmail.com', '$2y$10$ikITa3d6bKm4vK3obENubOIA5kWzEJNNp7Im4bBOpJ1rDs1ktymFy', 'user');
INSERT INTO `users` (`id`, `username`, `email`, `password`, `roles`) VALUES(8, '', '', '$2y$10$zzxCVjeIW65LFS3BWYXelOHoSoEMAhkmWgz2D2j1xPzb6dokeIocK', 'select tipe user');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pqr`
--
ALTER TABLE `pqr`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user` (`user`),
  ADD UNIQUE KEY `description` (`description`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pqr`
--
ALTER TABLE `pqr`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
