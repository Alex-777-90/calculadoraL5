    const btnGerarCalculo = document.getElementById("botao");

    btnGerarCalculo.addEventListener("click", async () => {
      
      const DadosOperacao = document.getElementById("SeleMath").value;
      const numero1 = document.getElementById("tab").value;
      const numero2 = document.getElementById("tab2").value;
      const nameUser = document.getElementById("name").value;
      const imgCalculator = document.getElementById("resultado2");
      const valueResult = document.getElementById("resultado")

      const resultadoDiv = document.getElementById("resultado");

    if (DadosOperacao === "Soma") {

        const urlSum ="http://localhost:3000/soma" 

        const response = await fetch(urlSum, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                operation:DadosOperacao,
                input1: numero1,
                input2: numero2,
                nameUser:nameUser
            })
        });

        valueResult.style.display ="block"
        imgCalculator.style.display ="none"
        const resultado = await response.text();
        resultadoDiv.innerHTML = resultado;

        console.log(resultado); // Exibe o resultado no console
    }


    if (DadosOperacao === "Subtração") {

       const urlSubtraction = "http://localhost:3000/subtracao"
        
       const response = await fetch(urlSubtraction, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            operation:DadosOperacao,
            input1: numero1,
            input2: numero2,
            nameUser:nameUser
         })
     });
        valueResult.style.display ="block"
        imgCalculator.style.display ="none"
        const resultado = await response.text();
        resultadoDiv.innerHTML = resultado;

        console.log(resultado); // Exibe o resultado no console

    }

    if (DadosOperacao === "Multiplicação") {

      const urlmultiplication = "http://localhost:3000/multiplicacao"
       
      const response = await fetch(urlmultiplication, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            operation:DadosOperacao,
            input1: numero1,
            input2: numero2,
            nameUser:nameUser
        })
    });
       valueResult.style.display ="block"
       imgCalculator.style.display ="none" 
       const resultado = await response.text();
       resultadoDiv.innerHTML = resultado;

       console.log(resultado); // Exibe o resultado no console

   }

   if (DadosOperacao === "Divisão") {

      const urldivision = "http://localhost:3000/divisao"
       
      const response = await fetch(urldivision, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            operation:DadosOperacao,
            input1: numero1,
            input2: numero2,
            nameUser:nameUser
        })
    });
       valueResult.style.display ="block"
       imgCalculator.style.display ="none"
       const resultado = await response.text();
       resultadoDiv.innerHTML = resultado;

       console.log(resultado); // Exibe o resultado no console

   }

});
 


 