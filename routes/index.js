const express = require('express');
const router = express.Router();
const mathOP = require("../controllers/MathOp")
const validations = require("../middlewares/formValidate")

/* GET home page. */
router.get('/',validations, function(req, res, next) {
  res.render('index');
});

// http://localhost:3000/subtracao
router.post("/subtracao",validations,mathOP.subtraction);

// http://localhost:3000/soma
router.post("/soma",validations,mathOP.sum);

// http://localhost:3000/multiplicacao
router.post("/multiplicacao",validations,mathOP.multiplication);

// http://localhost:3000/divisao
router.post("/divisao",validations,mathOP.division);

// http://localhost:3000/historico
router.get("/historico",validations,mathOP.showAllCalculate);

module.exports = router;
