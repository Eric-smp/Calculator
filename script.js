/* const teste = '5-5'
const subtra = teste.
const testeOne = '5  +  5'
const soma = testeOne.slice(1,5)
const testeTwo = '5  /  5'
const divisao = testeTwo.slice(1,5)
const testeTree = '5  *  5'
const multi = testeTree.slice(1,5) */


function result(){
   const nascimento=document.getElementById('nomOne').value
/*   const nascimento =document.getElementById("anoOne").value 
  
    
   const dataAnt = new Date()
 /*   const dia = String(nascimento.getDate()).padStart(2,0)
   const mes = String(nascimento.getMonth()+1)
   const ano = nascimento.getFullYear()
   
   const nascimen =`${dia}/${mes}/${ano}`
   console.log(nascimen) */ 




  /*  const dataAtual = new Date()
   console.log(dataAtual.toLocaleDateString('pt-br')) */
   
  /*const data = new Date()
  const dia = String (data.getDate()).padStart(2,'0') //para ter o 0 antes do numero inteiro de 1 á 9
  const mes = String(data.getMonth() + 1). padStart(2,'0')// 01, 02, 03
  const ano = data.getFullYear()

  const dataAtual= `${dia}/${mes}/${ano}`
  console.log(dataAtual)
  */

 
  const date1 = new Date('novembro 27, 2003 14:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

const date2 = new Date('2023-04-13T14:38:00');
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1 === date2);
// Expected output: false

console.log(date1 - date2);
// Expected output: 0

}