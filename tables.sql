-- DROP TABLES
DROP TABLE pj;
DROP TABLE wh;
DROP TABLE partidas;

-- CREATE TABLES
CREATE TABLE partidas(
    id              INT NOT NULL AUTO_INCREMENT UNIQUE,
    code            VARCHAR(10) NOT NULL,
    PRIMARY KEY (code)
);

CREATE TABLE pj(
    id              INT NOT NULL AUTO_INCREMENT,
    code            VARCHAR(10) NOT NULL,
    nombre          VARCHAR(20) NOT NULL,
    pic             LONGTEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (code) REFERENCES partidas(code) ON DELETE CASCADE
);

CREATE TABLE wh(
    id              INT NOT NULL AUTO_INCREMENT UNIQUE,
    code            VARCHAR(10) NOT NULL,
    url             VARCHAR(130) NOT NULL UNIQUE,
    PRIMARY KEY (id),
    FOREIGN KEY (code) REFERENCES partidas(code) ON DELETE CASCADE
);

-- INSERT INTO TABLES
-- insert into partidas (code) values('WWAEXF');

-- insert into pj (code, nombre, pic)values('WWAEXF', 'Amelia', 'imagenIdeal');

-- insert into wh (code, url) values('WWAEXF', 'UrlIdeal');

-- SELECT * FROM TABLES
select * from partidas;
select * from pj;
select * from wh;
