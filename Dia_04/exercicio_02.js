/*2. Calculadora Simples
 Crie um programa que pede ao usuário dois números e uma operação (+,-, *, /) e realiza
 o cálculo correspondente.*/
 
 let num1 = 2
 let num2 = 9
 let operacao = "-"

 if(operacao === "+"){
    let soma = num1 + num2
    console.log(`A soma de ${num1} + ${num2} : ${soma} `)
 }
 if(operacao === "-"){
    let sub = num1 - num2
    console.log(`A subtração de ${num1} + ${num2} : ${sub} `)
 }
 if(operacao === "/"){
    let div = num1 / num2
    console.log(`A Divisão de ${num1} / ${num2} : ${div} `)
 }
 if(operacao === "*"){
    let sub = num1 * num2
    console.log(`A Multiplicação de ${num1} * ${num2} : ${sub} `)
 }
 