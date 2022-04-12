// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 === true && valor2 === true){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
 return string.split(" ")
}

// Desafio 4
function concatName(array) {
  let ultimoItem = array[array.length - 1]; 
  let primeiroItem = array[0];
  return ultimoItem + ', ' + primeiroItem
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1)
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let conta = 0;
  for(let i = 1; i < array.length; i += 1){
    if(maior < array[i]){
      maior = array[i]
    }
  }
  for(let i = 0; i < array.length; i += 1){
    if(maior === array[i]){
      conta += 1
    } 
  }
  return conta
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
