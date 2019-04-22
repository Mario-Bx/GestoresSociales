-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.1.30-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win32
-- HeidiSQL Versión:             10.1.0.5464
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
  `Telefono` varchar(150) NOT NULL,
  `Celular` varchar(150) NOT NULL,
  `Estado` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`AdministradorID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla gestores.administrador: ~10 rows (aproximadamente)
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` (`AdministradorID`, `Nombre`, `Apellidos`, `Correo`, `Clave`, `FechaNacimiento`, `Telefono`, `Celular`, `Estado`) VALUES
	(1, 'Carlos', 'Corzo', 'C@correo', 'ISEA', 'ISEA', 'ISEA', 'ISEA', 0),
	(2, 'Sebastian', 'Leiva', 'S@correo', '123', '12-12-1212', '65454', '3123213223', 1),
	(3, '098', '098', '098', '098', '098', '098', '098', 1),
	(4, '8', '8', '8', '8', '8', '8', '8', 1),
	(5, '98', '98', '98', '98', '89', '98', '98', 1),
	(6, '98', '89', '98', '98', '98', '98', '98', 1),
	(7, '86', '86', '68', '68', '86', '86', '86', 1),
	(8, '98', 'bolaños', '@corress', '9878', '98', '982345', '98', 1),
	(9, 'mario', 'bolaños', '1', '1', '1', '1', '1', 1),
	(10, '098', '098', '098', '098', '098', '098', '098', 1),
	(11, '098', '098', '098', '098', '098', '098', '098', 1);
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;

-- Volcando estructura para tabla gestores.bitacora
CREATE TABLE IF NOT EXISTS `bitacora` (
  `BitacoraID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(150) NOT NULL,
  `Fecha` varchar(150) NOT NULL,
  `Hora` varchar(150) NOT NULL,
  `Descripcion` varchar(150) NOT NULL,
  `Estado` tinyint(1) DEFAULT '1',
  `EstudiantesFK` int(11) DEFAULT NULL,
  PRIMARY KEY (`BitacoraID`),
  KEY `EstudiantesFK` (`EstudiantesFK`),
  CONSTRAINT `bitacora_ibfk_1` FOREIGN KEY (`EstudiantesFK`) REFERENCES `estudiantes` (`EstudiantesID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla gestores.bitacora: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `bitacora` DISABLE KEYS */;
INSERT INTO `bitacora` (`BitacoraID`, `Nombre`, `Fecha`, `Hora`, `Descripcion`, `Estado`, `EstudiantesFK`) VALUES
	(1, 'Bitacorea 1', '12-12-212', '12:;12', 'Hice coasas', 1, 1),
	(2, 'Bitacorea', '13-13-1313', '13:13', 'alGUNA COASA ', 1, 1);
/*!40000 ALTER TABLE `bitacora` ENABLE KEYS */;

-- Volcando estructura para tabla gestores.convocatorias
CREATE TABLE IF NOT EXISTS `convocatorias` (
  `ConvocatoriasID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(150) NOT NULL,
  `FechaInicio` varchar(150) NOT NULL,
  `FechaFin` varchar(150) NOT NULL,
  `Encargado` varchar(150) NOT NULL,
  `Descripcion` varchar(150) NOT NULL,
  `HorasGanadas` int(11) DEFAULT '0',
  `NoEstudienates` int(11) DEFAULT '0',
  `NoReserva` int(11) DEFAULT '0',
  `PeriodoAcademico` varchar(150) NOT NULL,
  `Estado` tinyint(1) DEFAULT '1',
  `AdministradorFK` int(11) DEFAULT NULL,
  `DependenciaFK` int(11) DEFAULT NULL,
  PRIMARY KEY (`ConvocatoriasID`),
  KEY `AdministradorFK` (`AdministradorFK`),
  KEY `DependenciaFK` (`DependenciaFK`),
  CONSTRAINT `convocatorias_ibfk_1` FOREIGN KEY (`AdministradorFK`) REFERENCES `administrador` (`AdministradorID`),
  CONSTRAINT `convocatorias_ibfk_2` FOREIGN KEY (`DependenciaFK`) REFERENCES `dependencia` (`DependenciaID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla gestores.convocatorias: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `convocatorias` DISABLE KEYS */;
INSERT INTO `convocatorias` (`ConvocatoriasID`, `Nombre`, `FechaInicio`, `FechaFin`, `Encargado`, `Descripcion`, `HorasGanadas`, `NoEstudienates`, `NoReserva`, `PeriodoAcademico`, `Estado`, `AdministradorFK`, `DependenciaFK`) VALUES
	(1, 'Trabajo', '12-12-1212 12:12', '12-12-1212 12:12', 'profesor', 'practiva', 2, 2, 1, '2019-1', 1, 2, 1),
	(2, 'Trabajo 2', '13-13-1313 13;13', '13-13-1313 13;13', 'Funcionarios', 'evento', 3, 3, 2, '2019-1', 1, 2, 2),
	(3, '2', '2', '2', '2', '2', 2, 2, 2, '2', 1, 2, 1),
	(4, '8', '8', '8', '8', '8', 8, 8, 8, '8', 1, 2, 1),
	(5, '', '', '', '', '', 0, 0, 0, '', 1, 2, 1),
	(6, '', '', '', '', '', 0, 0, 0, '', 1, 2, 1);
/*!40000 ALTER TABLE `convocatorias` ENABLE KEYS */;

-- Volcando estructura para tabla gestores.dependencia
CREATE TABLE IF NOT EXISTS `dependencia` (
  `DependenciaID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(150) NOT NULL,
  `Estado` tinyint(1) DEFAULT '1',
  `EscuelaFK` int(11) DEFAULT NULL,
  PRIMARY KEY (`DependenciaID`),
  KEY `EscuelaFK` (`EscuelaFK`),
  CONSTRAINT `dependencia_ibfk_1` FOREIGN KEY (`EscuelaFK`) REFERENCES `escuela` (`EscuelaID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla gestores.dependencia: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `dependencia` DISABLE KEYS */;
INSERT INTO `dependencia` (`DependenciaID`, `Nombre`, `Estado`, `EscuelaFK`) VALUES
	(1, 'Sistemas', 1, 1),
	(2, 'Industrial', 1, 1),
	(3, 'otra', 1, 2);
/*!40000 ALTER TABLE `dependencia` ENABLE KEYS */;

-- Volcando estructura para tabla gestores.escuela
CREATE TABLE IF NOT EXISTS `escuela` (
  `EscuelaID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(150) NOT NULL,
  `AdministradorFK` int(11) DEFAULT NULL,
  PRIMARY KEY (`EscuelaID`),
  KEY `AdministradorFK` (`AdministradorFK`),
  CONSTRAINT `escuela_ibfk_1` FOREIGN KEY (`AdministradorFK`) REFERENCES `administrador` (`AdministradorID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla gestores.escuela: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `escuela` DISABLE KEYS */;
INSERT INTO `escuela` (`EscuelaID`, `Nombre`, `AdministradorFK`) VALUES
	(1, 'ingenierias', 2),
	(2, 'Deportes', 1);
/*!40000 ALTER TABLE `escuela` ENABLE KEYS */;

-- Volcando estructura para tabla gestores.estudiantes
CREATE TABLE IF NOT EXISTS `estudiantes` (
  `EstudiantesID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(150) NOT NULL,
  `Apellidos` varchar(150) NOT NULL,
  `Correo` varchar(150) NOT NULL,
  `Clave` varchar(150) NOT NULL,
  `TipoDocumento` varchar(150) NOT NULL,
  `Documento` varchar(150) NOT NULL,
  `FechaNacimiento` varchar(150) NOT NULL,
  `Celular` varchar(150) NOT NULL,
  `Telefono` varchar(150) NOT NULL,
  `Escuela` varchar(150) NOT NULL,
  `Carreara` varchar(150) NOT NULL,
  `Semestre` varchar(150) NOT NULL,
  `Estado` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`EstudiantesID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla gestores.estudiantes: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `estudiantes` DISABLE KEYS */;
INSERT INTO `estudiantes` (`EstudiantesID`, `Nombre`, `Apellidos`, `Correo`, `Clave`, `TipoDocumento`, `Documento`, `FechaNacimiento`, `Celular`, `Telefono`, `Escuela`, `Carreara`, `Semestre`, `Estado`) VALUES
	(1, 'Mario', 'Bolaños', 'M@correo', '123', 'C.C', '1018460477', '12-12-1212', '3211232323', '6788787', 'Ciencias Exactas', 'Ingenieria Sistemas', '123', 1),
	(2, 'Renan', 'Arias', 'R@correo', '1234', 'C.C', '123', '123', '123', '123', '123', '123', '123', 1),
	(3, 'Juan', 'Albarracin', 'J@correo', '321', 'C.C', '123', '123', '123', '123', '123', '123', '123', 1),
	(4, 'Eduard', 'Numpaque', 'E@correo', '4321', 'C.C', '1018460477', '12-12-1212', '3211232323', '6788787', 'Ciencias Exactas', 'Ingenieria Sistemas', '123', 1),
	(5, '98', '98', '98', '98', '89', '89', '89', '98', '98', '98', '98', '98', 1);
/*!40000 ALTER TABLE `estudiantes` ENABLE KEYS */;

-- Volcando estructura para tabla gestores.principal
CREATE TABLE IF NOT EXISTS `principal` (
  `PrincipalID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(150) NOT NULL,
  `Estado` tinyint(1) DEFAULT '0',
  `EstudiantesFK` int(11) DEFAULT NULL,
  `ConvocatoriasFK` int(11) DEFAULT NULL,
  PRIMARY KEY (`PrincipalID`),
  KEY `EstudiantesFK` (`EstudiantesFK`),
  KEY `ConvocatoriasFK` (`ConvocatoriasFK`),
  CONSTRAINT `principal_ibfk_1` FOREIGN KEY (`EstudiantesFK`) REFERENCES `estudiantes` (`EstudiantesID`),
  CONSTRAINT `principal_ibfk_2` FOREIGN KEY (`ConvocatoriasFK`) REFERENCES `convocatorias` (`ConvocatoriasID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla gestores.principal: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `principal` DISABLE KEYS */;
INSERT INTO `principal` (`PrincipalID`, `Nombre`, `Estado`, `EstudiantesFK`, `ConvocatoriasFK`) VALUES
	(1, 'principal 1', 0, 3, 1),
	(2, 'principal 2', 0, 1, 1),
	(3, 'principal 3', 0, 2, 1),
	(4, 'principal 4', 0, 4, 2);
/*!40000 ALTER TABLE `principal` ENABLE KEYS */;

-- Volcando estructura para tabla gestores.reserva
CREATE TABLE IF NOT EXISTS `reserva` (
  `ReservaID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(150) NOT NULL,
  `Estado` tinyint(1) DEFAULT '0',
  `EstudiantesFK` int(11) DEFAULT NULL,
  `ConvocatoriasFK` int(11) DEFAULT NULL,
  PRIMARY KEY (`ReservaID`),
  KEY `EstudiantesFK` (`EstudiantesFK`),
  KEY `ConvocatoriasFK` (`ConvocatoriasFK`),
  CONSTRAINT `reserva_ibfk_1` FOREIGN KEY (`EstudiantesFK`) REFERENCES `estudiantes` (`EstudiantesID`),
  CONSTRAINT `reserva_ibfk_2` FOREIGN KEY (`ConvocatoriasFK`) REFERENCES `convocatorias` (`ConvocatoriasID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla gestores.reserva: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `reserva` DISABLE KEYS */;
INSERT INTO `reserva` (`ReservaID`, `Nombre`, `Estado`, `EstudiantesFK`, `ConvocatoriasFK`) VALUES
	(1, 'dasd', 1, 1, 1),
	(2, 'asdsa', 1, 3, 1),
	(3, 'qweq', 1, 2, 1),
	(4, 'dasd', 0, 1, 2);
/*!40000 ALTER TABLE `reserva` ENABLE KEYS */;

-- Volcando estructura para tabla gestores.sanciones
CREATE TABLE IF NOT EXISTS `sanciones` (
  `SancionesID` int(11) NOT NULL AUTO_INCREMENT,
  `Descripcion` varchar(150) NOT NULL,
  `NumeroConvocatria` int(11) DEFAULT '0',
  `ConInicial` int(11) DEFAULT '0',
  `ConFinal` int(11) DEFAULT '0',
  `Estado` tinyint(1) DEFAULT '1',
  `EstudiantesFK` int(11) DEFAULT NULL,
  PRIMARY KEY (`SancionesID`),
  KEY `EstudiantesFK` (`EstudiantesFK`),
  CONSTRAINT `sanciones_ibfk_1` FOREIGN KEY (`EstudiantesFK`) REFERENCES `estudiantes` (`EstudiantesID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla gestores.sanciones: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `sanciones` DISABLE KEYS */;
INSERT INTO `sanciones` (`SancionesID`, `Descripcion`, `NumeroConvocatria`, `ConInicial`, `ConFinal`, `Estado`, `EstudiantesFK`) VALUES
	(1, 'NO se presento', 4, 1, 8, 1, 1),
	(2, 'Incumplio con sus deberes', 2, 8, 9, 1, 1),
	(3, 'esra es la des', 1, 2, 3, 1, 1),
	(4, 'Cambio', 23, 23, 23, 1, 1);
/*!40000 ALTER TABLE `sanciones` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
