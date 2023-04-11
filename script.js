const teste = '5  -  5'
const subtra = teste.slice(1,4)
const testeOne = '5  +  5'
const soma = testeOne.slice(1,5)
const testeTwo = '5  /  5'
const divisao = testeTwo.slice(1,5)
const testeTree = '5  *  5'
const multi = testeTree.slice(1,5)

const numone = document.getElementById('nomone').value

function result(){
  


  if(subtra){
    console.log (document.getElementById('resultado').innerHTML = parseFloat(numone, 10) )
  }
}