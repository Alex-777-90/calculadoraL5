Este projeto emula uma calculadora não na forma convencional de CSS.

Feita como Node.js , Express.js , html com EJS no padrão MVC 

Para iniciar o projeto - npm install 

Para rodar o servidor na porta http://localhost:3000 - npm start 
irá rodar o nodemon e acessando no Browser http://localhost:3000 irá aparecer home page


Script do banco de dados no mySQL

CREATE DATABASE calculadoral5;
CREATE TABLE datas (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  operation VARCHAR(255) ,
  number1 INT ,
  number2 INT ,
  valueResult INT ,
  nameUser VARCHAR(255) ,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


