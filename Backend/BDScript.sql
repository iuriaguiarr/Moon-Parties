/* Projeto_DS2(lógico): */

CREATE TABLE User (
    id-user VARCHAR PRIMARY KEY,
    nome VARCHAR,
    email VARCHAR UNIQUE,
    senha VARCHAR
);

CREATE TABLE Eventos (
    id-evento VARCHAR PRIMARY KEY,
    fk_User_id_user VARCHAR,
    titulo VARCHAR,
    descricao VARCHAR,
    data-evento DATE,
    preco VARCHAR,
    localidade VARCHAR
);

CREATE TABLE Convidados (
    id-convidado VARCHAR PRIMARY KEY,
    fk_Eventos_id_evento VARCHAR,
    email VARCHAR
);

CREATE TABLE Mensagens (
    id-mensagem VARCHAR PRIMARY KEY,
    fk_Eventos_id_evento VARCHAR,
    titulo VARCHAR,
    descricao VARCHAR
);

ALTER TABLE Eventos ADD CONSTRAINT user-eventos
    FOREIGN KEY (fk_User_id_user)
    REFERENCES User (id-user)
    ON DELETE CASCADE;CREATE TABLE User (
    id-user VARCHAR PRIMARY KEY,
    nome VARCHAR,
    email VARCHAR UNIQUE,
    senha VARCHAR
);o)
    REFERENCES Eventos (id-evento)
    ON DELETE CASCADE;

ALTER TABLE Mensagens ADD CONSTRAINT evento-mensagem
    FOREIGN KEY (fk_Eventos_id_evento)
    REFERENCES Eventos (id-evento)
    ON DELETE RESTRICT;
