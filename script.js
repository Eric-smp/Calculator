var numone = document.getElementById("numone")
var numtwo = document.getElementById("numtwo")
var result = document.getElementById("resultado")

function soma(){
  const soma = numone + numtwo
  console.log("resultado da soma", soma)
  result.innerHTML=soma
}

function subtracao(){
  const subtracao = numone - numtwo
  console.log("resultado da subtração", subtracao)
}
function divisao(){
  const divisao = numone / numtwo
  console.log("O resultado da divisão é", divisao)
}

function multiplicacao(){
  const multiplicacao = numone * numtwo
  console.log("O resultado da multiplicação é ", multiplicacao)
}