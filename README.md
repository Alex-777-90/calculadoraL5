Este projeto emula uma calculadora não na forma convencional de CSS.

Feita como Node.js , Express.js,sequelize , html com EJS no padrão MVC 

Para iniciar o projeto - npm install 

Para rodar o servidor na porta http://localhost:3000 - npm start 
irá rodar o nodemon e acessando no Browser http://localhost:3000 irá aparecer home page


Script do banco de dados no mySQL

CREATE DATABASE calculadoral5;<br>
CREATE TABLE datas (<br>
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,<br>
  operation VARCHAR(255) ,<br>
  number1 INT ,<br>
  number2 INT ,<br>
  valueResult INT ,<br>
  nameUser VARCHAR(255) ,<br>
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,<br>
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP<br>
);<br>


