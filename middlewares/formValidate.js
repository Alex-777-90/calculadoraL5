const {body} = require("express-validator");


const validations = [
    body("nameUser")
       .notEmpty().withMessage("O nome deve ser preenchido"),
    body("input1")
       .notEmpty().withMessage("Digite um número válido"),
    body("input2")
       .notEmpty().withMessage("Digite outro número válido")
]
module.exports = validations;

