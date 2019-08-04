--
-- Database: `pruebaska_db`
--

CREATE DATABASE IF NOT EXISTS `pruebaska_db`;
USE `pruebaska_db`;


-- ENTITIES

--
-- Struttura della tabella `empresas`
--

CREATE TABLE IF NOT EXISTS `empresas` (
	`direccion` varchar(130) ,
	`fechaAlta` date ,
	`flag` bool ,
	`lastUpdate` date ,
	`nombre` varchar(130)  NOT NULL,
	`rut` varchar(130) ,
	`telefono` varchar(130) ,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`email` varchar(130) ,
	`fechaAlta` date ,
	`flag` varchar(130) ,
	`hash` varchar(130) ,
	`lastLog` date ,
	`level` int ,
	`nombres` varchar(130) ,
	`password` varchar(130)  NOT NULL,
	`recibeOfertas` bool ,
	`telefono` varchar(130) ,
	`username` varchar(130)  NOT NULL,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

INSERT INTO `pruebaska_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `pruebaska_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);





--
-- Struttura della tabella `categoriamenu`
--

CREATE TABLE IF NOT EXISTS `categoriamenu` (
	`descripcionCategoria` varchar(130) ,
	`nombreCategoria` varchar(130)  NOT NULL,
	
	-- RELAZIONI
	`idMenu` int(11)  REFERENCES menu(_id),

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `config`
--

CREATE TABLE IF NOT EXISTS `config` (
	`preciosIva` bool  NOT NULL,
	`webpayToken` varchar(130) ,
	
	-- RELAZIONI
	`idEmpresa` int(11)  REFERENCES empresas(_id),

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `itemmenu`
--

CREATE TABLE IF NOT EXISTS `itemmenu` (
	`costo` varchar(130)  NOT NULL,
	`descripcion` varchar(130) ,
	`flag` bool  NOT NULL,
	`nombre` varchar(130)  NOT NULL,
	
	-- RELAZIONI
	`idMenu` int(11)  REFERENCES menu(_id),

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `itemorden`
--

CREATE TABLE IF NOT EXISTS `itemorden` (
	`cantidad` varchar(130) ,
	`costo` varchar(130) ,
	`fechaHora` date ,
	`status` int ,
	
	-- RELAZIONI
	`idItemMenu` int(11)  REFERENCES menu(_id),
	`idOrden` int(11)  REFERENCES ordenes(_id),

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `media`
--

CREATE TABLE IF NOT EXISTS `media` (
	`idParent` int ,
	`url` varchar(130)  NOT NULL,
	
	-- RELAZIONI
	`tipoMedia` int(11)  REFERENCES tiposmedia(_id),

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `menu`
--

CREATE TABLE IF NOT EXISTS `menu` (
	`flag` bool ,
	`nombreMenu` varchar(130) ,
	
	-- RELAZIONI
	`idEmpresa` int(11)  REFERENCES empresas(_id),

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `mesas`
--

CREATE TABLE IF NOT EXISTS `mesas` (
	`flag` bool ,
	`hash` varchar(130) ,
	`lastUpdate` date ,
	`nombre` varchar(130) ,
	
	-- RELAZIONI
	`idEmpresa` int(11)  REFERENCES empresas(_id),

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `ordenes`
--

CREATE TABLE IF NOT EXISTS `ordenes` (
	`fechaAbierto` date  NOT NULL,
	`fechaCerrado` date ,
	`modoPago` varchar(130) ,
	`status` int ,
	
	-- RELAZIONI
	`idMesa` int(11)  REFERENCES mesas(_id),
	`idRestaurant` int(11)  REFERENCES menu(_id),
	`idUsuario` int(11)  REFERENCES user(_id),

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `tiposmedia`
--

CREATE TABLE IF NOT EXISTS `tiposmedia` (
	`flag` bool ,
	`nombre` varchar(130) ,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `userempresa`
--

CREATE TABLE IF NOT EXISTS `userempresa` (
	`lastUpdate` date  NOT NULL,
	`tipoUsuario` int  NOT NULL,
	
	-- RELAZIONI
	`idEmpresa` int(11)  REFERENCES empresas(_id),

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);




-- relation m:m idUsuario userEmpresa - User
CREATE TABLE IF NOT EXISTS `userEmpresa_idUsuario` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_userEmpresa` int(11)  NOT NULL REFERENCES userEmpresa(_id),
    `id_User` int(11)  NOT NULL REFERENCES User(_id)
);



