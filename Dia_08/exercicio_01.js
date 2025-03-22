 /*1. Calculadora com Funções
 Crie uma calculadora simples usando funções para somar, subtrair, multiplicar e dividir dois
 números.*/

 function soma(a, b){
    return `Soma de ${a} + ${b} é ${a + b}`
 }
function subtrair(a, b){
    return `Subtração de ${a} - ${b} é ${a - b}`
}
function dividir(a, b){
    return `Divisão de ${a} / ${b} é ${a / b}`
}
function multiplicar(a,b){
    return `Multiplicação de ${a} X ${b} é ${a * b}`
}


console.log(soma(2,4))
console.log(subtrair(8, 5))
console.log(multiplicar(4, 7))
console.log(dividir(20, 2))