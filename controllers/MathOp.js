const db = require("../models")
const Data = db.Data;

const { body, validationResult } = require('express-validator');

const math = {

    sum : async (req,res) =>{

        try {
                 // Verifica se há erros de validação
                 const errors = validationResult(req).mapped();
                 
                 if (Object.keys(errors).length > 0) {
                     const errorMsg = Object.values(errors)[0].msg;
                     return res.status(422).send(errorMsg);
                 }
           
                
                const {input1,input2 ,nameUser,operation} = req.body
                const sumResult = Number(input1) + Number(input2)

    
            // Salva os dados na tabela datas usando o modelo Data
            await Data.create({
                    operation: operation,
                    number1:input1,
                    number2:input2,
                    valueResult: sumResult,
                    nameUser: nameUser
                })
                
                return res.status(200).send(`${input1} + ${input2} = ${sumResult}`);

        } catch (error) {
                return res.status(500).send("Erro ao conectar ao banco de dados.") 
        }
    },

    subtraction: async (req,res) =>{

        try {
                 // Verifica se há erros de validação
                 const errors = validationResult(req).mapped();

                 if (Object.keys(errors).length > 0) {
                     const errorMsg = Object.values(errors)[0].msg;
                     return res.status(422).send(errorMsg);
                 }

                const {input1,input2 ,nameUser,operation} = req.body
                const subtractionResult = Number(input1) - Number(input2)

                // Salva os dados na tabela datas usando o modelo Data
                await Data.create({
                        operation: operation,
                        number1:input1,
                        number2:input2,
                        valueResult: subtractionResult,
                        nameUser: nameUser
                })

                return res.status(200).send(`${input1} - ${input2} = ${subtractionResult}`);

        } catch (error) {
                return res.status(500).send("Erro ao conectar ao banco de dados.") 
        }
    },

    division: async (req,res) =>{

        try {

                 // Verifica se há erros de validação
                 const errors = validationResult(req).mapped();
                 
                 if (Object.keys(errors).length > 0) {
                     const errorMsg = Object.values(errors)[0].msg;
                     return res.status(422).send(errorMsg);
                 }

                const {input1,input2 ,nameUser,operation} = req.body
                const divisionResult = Number(input1) / Number(input2)

                // Salva os dados na tabela datas usando o modelo Data
                await Data.create({
                    operation: operation,
                    number1:input1,
                    number2:input2,
                    valueResult: divisionResult,
                    nameUser: nameUser
                })

                return res.status(200).send(`${input1} / ${input2} = ${divisionResult}`);

        } catch (error) {
                return res.status(500).send("Erro ao conectar ao banco de dados.") 
        }
    },

    multiplication: async (req,res) =>{

        try {
                 // Verifica se há erros de validação
                 const errors = validationResult(req).mapped();
                 
                 if (Object.keys(errors).length > 0) {
                     const errorMsg = Object.values(errors)[0].msg;
                     return res.status(422).send(errorMsg);
                 }
                 
                const {input1,input2 ,nameUser,operation} = req.body
                const multiplicationResult = Number(input1) * Number(input2)

                // Salva os dados na tabela datas usando o modelo Data
                await Data.create({
                    operation: operation,
                    number1:input1,
                    number2:input2,
                    valueResult: multiplicationResult,
                    nameUser: nameUser
                })

                return res.status(200).send(`${input1} x ${input2} = ${multiplicationResult}`);

        } catch (error) {
                return res.status(500).send("Erro ao conectar ao banco de dados.") 
        }
    },

    showAllCalculate: async (req,res) => {

        try {
                const allData = await Data.findAll();

                return res.status(200).render("alldata",{data:allData});

        } catch (error) {
                return res.status(500).send("Erro ao conectar ao banco de dados.")  
        }
    }

}
module.exports = math