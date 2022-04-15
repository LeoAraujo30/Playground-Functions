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
  let distanciaCat1 = Math.abs(cat1 - mouse); 
  let distanciaCat2 = Math.abs(cat2 - mouse); 
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

// Desafio 8
function fizzBuzz(numeros) {
  let array = [];
  for(let i = 0; i < numeros.length; i += 1) {
    if(numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      array.push('fizzBuzz');
    } else if(numeros[i] % 3 === 0) {
      array.push('fizz');
    } else if(numeros[i] % 5 === 0) {
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }
  return array
}

// Desafio 9
function encode(string) {
  let string2 = '';
  for(let i = 0; i < string.length; i += 1){
    if (string[i] === 'a') {
      string2 += '1'
    } else if (string[i] === 'e') {
      string2 += '2'
    } else if (string[i] === 'i') {
      string2 += '3'
    } else if (string[i] === 'o') {
      string2 += '4'
    } else if (string[i] === 'u') {
      string2 += '5'
    } else {
      string2 += string[i]
    }
  }
  return string2
}

function decode(string) {
  let string2 = '';
  for(let i = 0; i < string.length; i += 1){
    if (string[i] === '1') {
      string2 += 'a'
    } else if (string[i] === '2') {
      string2 += 'e'
    } else if (string[i] === '3') {
      string2 += 'i'
    } else if (string[i] === '4') {
      string2 += 'o'
    } else if (string[i] === '5') {
      string2 += 'u'
    } else {
      string2 += string[i]
    }
  }
  return string2
}

// Desafio 10
function techList(array, name) {
  let resultado;
  if(array.length == 0) {
    resultado = 'Vazio!'
  }
  let ordenado = array.sort()
  let objeto = [];
   for(let i in ordenado){
      objeto[i] =
        {
          tech: ordenado[i],
          name: name
        }
      resultado = objeto
    }
   return resultado
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
