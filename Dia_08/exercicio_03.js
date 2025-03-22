/* Conversor de Temperaturas
 Crie funções para converter temperaturas entre Celsius,Fahrenheite Kelvin */



 function Celsius(c) {
    return (c - 32 ) * 5/9
 }
function Kelvin(c) {
   return c + 273.15
}
function Fahrenheite(c){
   return c * 9/5 +32
}
 console.log(Celsius(80).toFixed(2))
 console.log(Kelvin(80).toFixed(2))
 console.log(Fahrenheite(80).toFixed(2))