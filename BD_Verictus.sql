create database verictus;
use verictus;

create table usuarios_verictus(
    id int primary key auto_increment,
    nome varchar(255),
    email varchar(255) not null,
    senha varchar(255) not null
);
create table historico(
    id_pesquisa int primary key auto_increment,
    data_pesquisa datetime not null,
    link_site varchar(255) not null,
    resposta varchar(255)
);
