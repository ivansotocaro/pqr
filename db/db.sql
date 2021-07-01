-- CREATE DATABASE sale;

-- USE sale;

-- CREATE TABLE product(
-- id int(10) primary key auto_increment,
-- name varchar(150) not null,
-- price decimal(20,2) not null,
-- description varchar(150)
-- );


CREATE DATABASE pqr;

USE pqr;

CREATE TABLE users(
id int(10) primary key auto_increment,
username varchar(150) not null,
email varchar(150) UNIQUE not null,
password varchar(150),
roles varchar(150)
)

CREATE TABLE pqr(
id int(10) primary key auto_increment,
typepqr varchar(150) not null,
user varchar(150) not null,
description varchar(150) not null,
state varchar(150),
creationdate varchar(150),
limitedate varchar(150),
)