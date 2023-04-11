
function somar(){
  const numone = document.getElementById('numone').value
  const numtwo = document.getElementById('numtwo').value
  document.getElementById('resultado').innerHTML= parseFloat(numone, 10)+ parseFloat(numtwo, 10)
}

function subtracao(){
  const numone = document.getElementById('numone').value
  const numtwo = document.getElementById('numtwo').value
  document.getElementById('resultado').innerHTML= parseFloat(numone, 10) - parseFloat(numtwo, 10)
}
function divisao(){
  const numone = document.getElementById('numone').value
  const numtwo = document.getElementById('numtwo').value
  document.getElementById('resultado').innerHTML= parseFloat(numone, 10) / parseFloat(numtwo, 10)
}

function multiplicacao(){
  const numone = document.getElementById('numone').value
  const numtwo = document.getElementById('numtwo').value
  document.getElementById('resultado').innerHTML= parseFloat(numone, 10) * parseFloat(numtwo, 10)
}