/*GeradordeSenhasAleatórias
 Crie uma função que gera uma senha aleatória com tamanho especificado,contendo letras
 maiúsculas,minúsculas,númerose símbolos*/

 function GerarSenhaAleatoria() {
   let maiusculas = String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase()
   let minusculas = String.fromCharCode(Math.floor(Math.random() * 26) + 97).toLowerCase()
   let numeros = Math.floor(Math.random() * 455) * 17
   let caracter = '!@#$%^&*()_+[]{}/\<>?'
   let símbolo = Math.floor(Math.random() * caracter.length)
   return maiusculas + minusculas + numeros + caracter[símbolo]
} 
 

 console.log(GerarSenhaAleatoria())