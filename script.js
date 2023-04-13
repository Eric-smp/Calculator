/* const teste = '5-5'
const subtra = teste.
const testeOne = '5  +  5'
const soma = testeOne.slice(1,5)
const testeTwo = '5  /  5'
const divisao = testeTwo.slice(1,5)
const testeTree = '5  *  5'
const multi = testeTree.slice(1,5) */


function result(){
  const nascimento = document.getElementById("anoOne").value
  const data = new Date()
  const dia = String (data.getDay()).padStart(2,0) //para ter o 0 antes do numero inteiro de 1 á 9
  const mes = String(data.getMonth() + 1). padStart(2,0)// 01, 02, 03
  const ano = data.getFullYear()

  const dataAtual= `${dia}/${mes}/${ano}`
  const valor = dataAtual - nascimento
  document.getElementById('resultado').innerHTML=valor


}