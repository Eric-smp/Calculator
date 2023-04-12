/* const teste = '5-5'
const subtra = teste.
const testeOne = '5  +  5'
const soma = testeOne.slice(1,5)
const testeTwo = '5  /  5'
const divisao = testeTwo.slice(1,5)
const testeTree = '5  *  5'
const multi = testeTree.slice(1,5) */



function result(){
  const numone = document.getElementById('numone').value
  const numtwo = document.getElementById('numtwo').value
  const opera = numone - numtwo
  if(opera){
    document.getElementById('resultado').innerHTML= parseFloat(numtwo) - parseFloat(numone) 
  }
  
}