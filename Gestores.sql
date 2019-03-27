-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.1.25-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win32
-- HeidiSQL Versión:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para gestores
CREATE DATABASE IF NOT EXISTS `gestores` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `gestores`;

-- Volcando estructura para tabla gestores.administrador
CREATE TABLE IF NOT EXISTS `administrador` (
  `AdministradorID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(150) NOT NULL,
  `Apellidos` varchar(150) NOT NULL,
  `Correo` varchar(150) NOT NULL,
  `Clave` varchar(150) NOT NULL,
  `FechaNacimiento` varchar(150) NOT NULL,
  `Documento` varchar(150) NOT NULL,
  `Telefono` varchar(150) NOT NULL,
  `Celular` varchar(150) NOT NULL,
  PRIMARY KEY (`AdministradorID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla gestores.administrador: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` (`AdministradorID`, `Nombre`, `Apellidos`, `Correo`, `Clave`, `FechaNacimiento`, `Documento`, `Telefono`, `Celular`) VALUES
	(1, 'Mario', 'Bolaños', '@correo', '123', '12/12/1233', '123', '123', '123'),
	(2, 'juan', 'Albaracin', '@correo', '123', '12/12/1233', '123', '123', '123'),
	(3, 'Renan', 'Albaracin', '@correo', '123', '12/12/1233', '123', '123', '123'),
	(4, 'Leiva', 'Albaracin', '@correo', '123', '12/12/1233', '123', '123', '123'),
	(5, 'Eduward', 'Albaracin', '@correo', '123', '12/12/1233', '123', '123', '123');
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;

-- Volcando estructura para tabla gestores.bitacora
CREATE TABLE IF NOT EXISTS `bitacora` (
  `BitacoraID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(150) NOT NULL,
  `Fecha` varchar(150) NOT NULL,
  `Hora` varchar(150) NOT NULL,
  `Descripcion` varchar(150) NOT NULL,
  `EstudiantesFK` int(11) DEFAULT NULL,
  PRIMARY KEY (`BitacoraID`),
  KEY `EstudiantesFK` (`EstudiantesFK`),
  CONSTRAINT `bitacora_ibfk_1` FOREIGN KEY (`EstudiantesFK`) REFERENCES `estudiantes` (`EstudiantesID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla gestores.bitacora: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `bitacora` DISABLE KEYS */;
INSERT INTO `bitacora` (`BitacoraID`, `Nombre`, `Fecha`, `Hora`, `Descripcion`, `EstudiantesFK`) VALUES
	(1, 'sadas', '12/12/1212', '12:12', 'asdasdas', 1),
	(2, 'sadas', '12/12/1212', '12:12', 'asdasdas', 1),
	(3, 'sadas', '12/12/1212', '12:12', 'asdasdas', 1),
	(4, 'sadas', '12/12/1212', '12:12', 'asdasdas', 1),
	(5, 'sadas', '12/12/1212', '12:12', 'asdasdas', 1);
/*!40000 ALTER TABLE `bitacora` ENABLE KEYS */;

-- Volcando estructura para tabla gestores.convocatorias
CREATE TABLE IF NOT EXISTS `convocatorias` (
  `ConvocatoriasID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(150) NOT NULL,
  `FechaInicio` varchar(150) NOT NULL,
  `FechaFin` varchar(150) NOT NULL,
  `Hora` varchar(150) NOT NULL,
  `Encargado` varchar(150) NOT NULL,
  `Descripcion` varchar(150) NOT NULL,
  `HorasGanadas` int(11) DEFAULT NULL,
  `AdministradorFK` int(11) DEFAULT NULL,
  PRIMARY KEY (`ConvocatoriasID`),
  KEY `AdministradorFK` (`AdministradorFK`),
  CONSTRAINT `convocatorias_ibfk_1` FOREIGN KEY (`AdministradorFK`) REFERENCES `administrador` (`AdministradorID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla gestores.convocatorias: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `convocatorias` DISABLE KEYS */;
INSERT INTO `convocatorias` (`ConvocatoriasID`, `Nombre`, `FechaInicio`, `FechaFin`, `Hora`, `Encargado`, `Descripcion`, `HorasGanadas`, `AdministradorFK`) VALUES
	(1, 'Mi convocatoria', '12/12/1212', '12/12/1212', '12:12', 'kely', 'no joda ', 5, 1),
	(2, 'Mi convocatoria', '12/12/1212', '12/12/1212', '12:12', 'kely', 'no joda ', 5, 1),
	(3, 'Mi convocatoria', '12/12/1212', '12/12/1212', '12:12', 'kely', 'no joda ', 5, 1),
	(4, 'Mi convocatoria', '12/12/1212', '12/12/1212', '12:12', 'kely', 'no joda ', 5, 1),
	(5, 'Mi convocatoria', '12/12/1212', '12/12/1212', '12:12', 'kely', 'no joda ', 5, 1),
	(6, 'Mi convocatoria', '12/12/1212', '12/12/1212', '12:12', 'kely', 'no joda ', 5, 1);
/*!40000 ALTER TABLE `convocatorias` ENABLE KEYS */;

-- Volcando estructura para tabla gestores.estudiantes
CREATE TABLE IF NOT EXISTS `estudiantes` (
  `EstudiantesID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(150) NOT NULL,
  `Apellidos` varchar(150) NOT NULL,
  `Correo` varchar(150) NOT NULL,
  `Clave` varchar(150) NOT NULL,
  `Documento` varchar(150) NOT NULL,
  `FechaNacimiento` varchar(150) NOT NULL,
  `Telefono` varchar(150) NOT NULL,
  `Celular` varchar(150) NOT NULL,
  `Escuela` varchar(150) NOT NULL,
  `Carreara` varchar(150) NOT NULL,
  PRIMARY KEY (`EstudiantesID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla gestores.estudiantes: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `estudiantes` DISABLE KEYS */;
INSERT INTO `estudiantes` (`EstudiantesID`, `Nombre`, `Apellidos`, `Correo`, `Clave`, `Documento`, `FechaNacimiento`, `Telefono`, `Celular`, `Escuela`, `Carreara`) VALUES
	(1, 'Lieva', 'xxx', '@correo', '123', '123', '12/12/1212', '123', '123', 'ingenieraia', 'sitemas'),
	(2, 'juan', 'xxx', '@correo', '123', '123', '12/12/1212', '123', '123', 'ingenieraia', 'sitemas'),
	(3, 'juan', 'xxx', '@correo', '123', '123', '12/12/1212', '123', '123', 'ingenieraia', 'sitemas'),
	(4, 'juan', 'xxx', '@correo', '123', '123', '12/12/1212', '123', '123', 'ingenieraia', 'sitemas'),
	(5, 'juan', 'xxx', '@correo', '123', '123', '12/12/1212', '123', '123', 'ingenieraia', 'sitemas'),
	(6, 'juan', 'xxx', '@correo', '123', '123', '12/12/1212', '123', '123', 'ingenieraia', 'sitemas');
/*!40000 ALTER TABLE `estudiantes` ENABLE KEYS */;

-- Volcando estructura para tabla gestores.principal
CREATE TABLE IF NOT EXISTS `principal` (
  `PrincipalID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(150) NOT NULL,
  `EstudiantesFK` int(11) DEFAULT NULL,
  `ConvocatoriasFK` int(11) DEFAULT NULL,
  PRIMARY KEY (`PrincipalID`),
  KEY `EstudiantesFK` (`EstudiantesFK`),
  KEY `ConvocatoriasFK` (`ConvocatoriasFK`),
  CONSTRAINT `principal_ibfk_1` FOREIGN KEY (`EstudiantesFK`) REFERENCES `estudiantes` (`EstudiantesID`),
  CONSTRAINT `principal_ibfk_2` FOREIGN KEY (`ConvocatoriasFK`) REFERENCES `convocatorias` (`ConvocatoriasID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla gestores.principal: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `principal` DISABLE KEYS */;
INSERT INTO `principal` (`PrincipalID`, `Nombre`, `EstudiantesFK`, `ConvocatoriasFK`) VALUES
	(1, 'prin 1', 1, 2),
	(2, 'prin 1', 2, 2),
	(3, 'prin 1', 3, 2),
	(4, 'prin 1', 4, 2),
	(5, 'prin 1', 5, 2);
/*!40000 ALTER TABLE `principal` ENABLE KEYS */;

-- Volcando estructura para tabla gestores.reserva
CREATE TABLE IF NOT EXISTS `reserva` (
  `ReservaID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(150) NOT NULL,
  `EstudiantesFK` int(11) DEFAULT NULL,
  `ConvocatoriasFK` int(11) DEFAULT NULL,
  PRIMARY KEY (`ReservaID`),
  KEY `EstudiantesFK` (`EstudiantesFK`),
  KEY `ConvocatoriasFK` (`ConvocatoriasFK`),
  CONSTRAINT `reserva_ibfk_1` FOREIGN KEY (`EstudiantesFK`) REFERENCES `estudiantes` (`EstudiantesID`),
  CONSTRAINT `reserva_ibfk_2` FOREIGN KEY (`ConvocatoriasFK`) REFERENCES `convocatorias` (`ConvocatoriasID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla gestores.reserva: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `reserva` DISABLE KEYS */;
INSERT INTO `reserva` (`ReservaID`, `Nombre`, `EstudiantesFK`, `ConvocatoriasFK`) VALUES
	(1, 'Putos', 5, 2),
	(2, 'Putos', 3, 2),
	(3, 'Putos', 4, 2),
	(4, 'Putos', 2, 3),
	(5, 'Putos', 5, 3);
/*!40000 ALTER TABLE `reserva` ENABLE KEYS */;

-- Volcando estructura para tabla gestores.sanciones
CREATE TABLE IF NOT EXISTS `sanciones` (
  `SancionesID` int(11) NOT NULL AUTO_INCREMENT,
  `Descripcion` varchar(150) NOT NULL,
  `NumeroConvocatria` int(11) DEFAULT NULL,
  `ConInicial` int(11) DEFAULT NULL,
  `ConFinal` int(11) DEFAULT NULL,
  `EstudiantesFK` int(11) DEFAULT NULL,
  PRIMARY KEY (`SancionesID`),
  KEY `EstudiantesFK` (`EstudiantesFK`),
  CONSTRAINT `sanciones_ibfk_1` FOREIGN KEY (`EstudiantesFK`) REFERENCES `estudiantes` (`EstudiantesID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla gestores.sanciones: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `sanciones` DISABLE KEYS */;
INSERT INTO `sanciones` (`SancionesID`, `Descripcion`, `NumeroConvocatria`, `ConInicial`, `ConFinal`, `EstudiantesFK`) VALUES
	(1, 'asdsa', 5, 12, 12, 2),
	(2, 'asdsa', 5, 12, 12, 2),
	(3, 'asdsa', 5, 12, 12, 2),
	(4, 'asdsa', 5, 12, 12, 2),
	(5, 'asdsa', 5, 12, 12, 2);
/*!40000 ALTER TABLE `sanciones` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
gestoresadministrador