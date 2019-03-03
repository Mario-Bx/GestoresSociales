CREATE DATABASE IF NOT EXISTS  Gestores;
USE Gestores;

CREATE TABLE IF NOT EXISTS Administrador (
AdministradorID int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (AdministradorID), 

Nombre varchar(150) NOT NULL,
Apellidos varchar(150) NOT NULL,
Correo varchar(150) NOT NULL,
Clave varchar(150) NOT NULL,
FechaNacimiento varchar(150) NOT NULL,
Documento int(11),
Telefono int(11),
Celular int(11)
);

CREATE TABLE IF NOT EXISTS Estudiantes (
EstudiantesID int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (EstudiantesID), 

Nombre varchar(150) NOT NULL,
Apellidos varchar(150) NOT NULL,
Correo varchar(150) NOT NULL,
Clave varchar(150) NOT NULL,
Documento int(11),
FechaNacimiento varchar(150) NOT NULL,
Telefono int(11),
Celular int(11),
Escuela varchar(150) NOT NULL,
Carreara varchar(150) NOT NULL
);

CREATE TABLE IF NOT EXISTS Convocatorias (
ConvocatoriasID int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (ConvocatoriasID), 

Nombre varchar(150) NOT NULL,
FechaInicio varchar(150) NOT NULL,
FechaFin varchar(150) NOT NULL,
Hora varchar(150) NOT NULL,
Encargado varchar(150) NOT NULL,
Descripcion varchar(150) NOT NULL,
HorasGanadas int(11)
);

CREATE TABLE IF NOT EXISTS Participantes (
ParticipantesID int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (ParticipantesID), 

Nombre varchar(150) NOT NULL
);

CREATE TABLE IF NOT EXISTS Bitacora (
BitacoraID int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (BitacoraID), 

Nombre varchar(150) NOT NULL,
Fecha varchar(150) NOT NULL,
Hora varchar(150) NOT NULL,
Descripcion varchar(150) NOT NULL
);

CREATE TABLE IF NOT EXISTS Sanciones (
SancionesID int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (SancionesID), 

Descripcion varchar(150) NOT NULL,
NumeroConvocatria int(11),
ConInicial int(11),
ConFinal int(11)
);

	
ALTER TABLE Convocatorias ADD AdministradorFK int(11);
ALTER TABLE Convocatorias ADD FOREIGN KEY (AdministradorFK) REFERENCES Administrador (AdministradorID);
ALTER TABLE Participantes ADD EstudiantesFK int(11);
ALTER TABLE Participantes ADD FOREIGN KEY (EstudiantesFK) REFERENCES Estudiantes (EstudiantesID);
ALTER TABLE Participantes ADD ConvocatoriasFK int(11);
ALTER TABLE Participantes ADD FOREIGN KEY (ConvocatoriasFK) REFERENCES Convocatorias (ConvocatoriasID);
ALTER TABLE Bitacora ADD EstudiantesFK int(11);
ALTER TABLE Bitacora ADD FOREIGN KEY (EstudiantesFK) REFERENCES Estudiantes (EstudiantesID);
ALTER TABLE Sanciones ADD EstudiantesFK int(11);
ALTER TABLE Sanciones ADD FOREIGN KEY (EstudiantesFK) REFERENCES Estudiantes (EstudiantesID);
