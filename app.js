// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
  }
  
  // solo un registro en consola para nosotros.
  console.log(sum(7,3))
  
  // exporta la función para usarla en otros archivos 
  // (similar a la palabra clave `export` cuando se usa webpack)
  
  
  let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
  }
  
  // declaramos una funcion con el mismo nombre "formEuroToDollar"
  const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
  } 
  console.log(fromEuroToDollar(3.5))
  
  const fromDollarToYen = function(valueInDollar) { 
    let valueInYen = (valueInDollar / oneEuroIs.USD) * oneEuroIs.JPY;
    return valueInYen; 
  }
  console.log(fromDollarToYen(1))
  
  const fromYenToPound = function() { 
    let valueInPound = oneEuroIs.GBP / oneEuroIs.JPY  ;
    return valueInPound; 
  }
  console.log(fromYenToPound(1))
  
  
  module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };