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
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = cat1 - mouse; 
  let distanciaCat2 = cat2 - mouse; 
  let string = '';

  if(distanciaCat1 < distanciaCat2 ) {
    string = 'cat1'
  } else if (distanciaCat1 > distanciaCat2) {
    string = 'cat2'
  } else {
    string = 'os gatos trombam e o rato foge'
  }
  return string
}
//console.log(catAndMouse(0, 3, 2))
//console.log(catAndMouse(10, 4, 22))
//console.log(catAndMouse(1, 0, 2))

// Desafio 8
function fizzBuzz(numeros) {
  let array = [];
  for(let i = 0; i < numeros.length; i += 1) {
    if(numeros[i] % 3 === 0) {
      array.push('fizz')
    }
    if(numeros[i] % 5 === 0) {
      array.push('buzz')
    }
    if(numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      array.push('fizzBuzz')
    } 
    if(numeros[i] % 3 !== 0 && numeros[i] % 5 !== 0) {
    array.push('bug!')
  }
  return array
  }
}

// Desafio 9
function encode(string) {
  for(let i = 0; i < string.length; i += 1){
    if (string[i] === 'a') {
      string[i] = '1'
    } else if (string[i] === 'e') {
      string[i] = '2'
    } else if (string[i] === 'i') {
      string[i] = '3'
    } else if (string[i] === 'o') {
      string[i] = '4'
    } else if (string[i] === 'u') {
      string[i] = '5'
    } else {
      string[i] = string[i]
    }
  }
  return string
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
