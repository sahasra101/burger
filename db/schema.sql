DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
USE `burgers_db`;


CREATE TABLE `burgers` (
	`id` Int(10) AUTO_INCREMENT NOT NULL,
	`burger_name` VARCHAR(100) NOT NULL,
    'devoured' BOOLEAN DEFAULT true,
	/* Set ID as primary key */
	PRIMARY KEY ( `id` )
);
