CREATE DATABASE IF NOT EXISTS  Gestores;
USE Gestores;

CREATE TABLE IF NOT EXISTS Escuela (
EscuelaID int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (EscuelaID), 

Nombre varchar(150) NOT NULL
);

CREATE TABLE IF NOT EXISTS Dependencia (
DependenciaID int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (DependenciaID), 

Nombre varchar(150) NOT NULL,
Estado BOOLEAN
);

CREATE TABLE IF NOT EXISTS Administrador (
AdministradorID int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (AdministradorID), 

Nombre varchar(150) NOT NULL,
Apellidos varchar(150) NOT NULL,
Correo varchar(150) NOT NULL,
Clave varchar(150) NOT NULL,
FechaNacimiento varchar(150) NOT NULL,
Telefono varchar(150) NOT NULL,
Celular varchar(150) NOT NULL,
Estado BOOLEAN
);

CREATE TABLE IF NOT EXISTS Estudiantes (
EstudiantesID int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (EstudiantesID), 

Nombre varchar(150) NOT NULL,
Apellidos varchar(150) NOT NULL,
Correo varchar(150) NOT NULL,
Clave varchar(150) NOT NULL,
TipoDocumento varchar(150) NOT NULL,
Documento varchar(150) NOT NULL,
FechaNacimiento varchar(150) NOT NULL,
Celular varchar(150) NOT NULL,
Telefono varchar(150) NOT NULL,
Escuela varchar(150) NOT NULL,
Carreara varchar(150) NOT NULL,
Semestre varchar(150) NOT NULL,
Estado BOOLEAN
);

CREATE TABLE IF NOT EXISTS Convocatorias (
ConvocatoriasID int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (ConvocatoriasID), 

Nombre varchar(150) NOT NULL,
FechaInicio varchar(150) NOT NULL,
FechaFin varchar(150) NOT NULL,
Encargado varchar(150) NOT NULL,
Descripcion varchar(150) NOT NULL,
HorasGanadas int(11),
NoEstudienates int(11),
NoReserva int(11),
PeriodoAcademico varchar(150) NOT NULL,
Estado BOOLEAN
);

CREATE TABLE IF NOT EXISTS Bitacora (
BitacoraID int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (BitacoraID), 

Nombre varchar(150) NOT NULL,
Fecha varchar(150) NOT NULL,
Hora varchar(150) NOT NULL,
Descripcion varchar(150) NOT NULL,
Estado BOOLEAN
);

CREATE TABLE IF NOT EXISTS Sanciones (
SancionesID int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (SancionesID), 

Descripcion varchar(150) NOT NULL,
NumeroConvocatria int(11),
ConInicial int(11),
ConFinal int(11),
Estado BOOLEAN
);

CREATE TABLE IF NOT EXISTS Principal (
PrincipalID int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (PrincipalID), 

Nombre varchar(150) NOT NULL,
Estado BOOLEAN
);

CREATE TABLE IF NOT EXISTS Reserva (
ReservaID int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (ReservaID), 

Nombre varchar(150) NOT NULL,
Estado BOOLEAN
);

	
ALTER TABLE Escuela ADD AdministradorFK int(11);
ALTER TABLE Escuela ADD FOREIGN KEY (AdministradorFK) REFERENCES Administrador (AdministradorID);
ALTER TABLE Dependencia ADD EscuelaFK int(11);
ALTER TABLE Dependencia ADD FOREIGN KEY (EscuelaFK) REFERENCES Escuela (EscuelaID);
ALTER TABLE Convocatorias ADD AdministradorFK int(11);
ALTER TABLE Convocatorias ADD FOREIGN KEY (AdministradorFK) REFERENCES Administrador (AdministradorID);
ALTER TABLE Convocatorias ADD DependenciaFK int(11);
ALTER TABLE Convocatorias ADD FOREIGN KEY (DependenciaFK) REFERENCES Dependencia (DependenciaID);
ALTER TABLE Bitacora ADD EstudiantesFK int(11);
ALTER TABLE Bitacora ADD FOREIGN KEY (EstudiantesFK) REFERENCES Estudiantes (EstudiantesID);
ALTER TABLE Sanciones ADD EstudiantesFK int(11);
ALTER TABLE Sanciones ADD FOREIGN KEY (EstudiantesFK) REFERENCES Estudiantes (EstudiantesID);
ALTER TABLE Principal ADD EstudiantesFK int(11);
ALTER TABLE Principal ADD FOREIGN KEY (EstudiantesFK) REFERENCES Estudiantes (EstudiantesID);
ALTER TABLE Principal ADD ConvocatoriasFK int(11);
ALTER TABLE Principal ADD FOREIGN KEY (ConvocatoriasFK) REFERENCES Convocatorias (ConvocatoriasID);
ALTER TABLE Reserva ADD EstudiantesFK int(11);
ALTER TABLE Reserva ADD FOREIGN KEY (EstudiantesFK) REFERENCES Estudiantes (EstudiantesID);
ALTER TABLE Reserva ADD ConvocatoriasFK int(11);
ALTER TABLE Reserva ADD FOREIGN KEY (ConvocatoriasFK) REFERENCES Convocatorias (ConvocatoriasID);
