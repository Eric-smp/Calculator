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
  const opera = numone.split(' ')[1]
  const n1 = numone.split(' ')[0]
  const n2 = numone.split(' ')[2]
  console.log(opera)
  if (opera === '+'){
    document.getElementById('resultado').innerHTML= parseFloat(n1) + parseFloat(n2)
  }
  if(opera === '-'){
    document.getElementById('resultado').innerHTML= parseFloat(n1) - parseFloat(n2)
  }
  if(opera === 'x' || opera === '*'){
    document.getElementById('resultado').innerHTML= parseFloat(n1) * parseFloat(n2)
  }
  if(opera === '/'){
    document.getElementById('resultado').innerHTML= parseFloat(n1) / parseFloat(n2)
  }
  
}