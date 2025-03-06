/*3. Tabuada de um Número
 Peça ao usuário um número inteiro e exiba a tabuada desse número de 1 a 10*/

 let numero = 2
 

 for(let i = 1; i <= 10; i++){
    console.log(`Soma ${numero} + ${i} = ${numero + i}`)
 }
 for(let i = 1 ; i <= 10; i++){
    console.log(`Subtração ${numero} - ${i} = ${Math.abs(numero - i)}`)
 }
 for(let i = 1 ; i <= 10; i++){
    console.log(`Multiplicação ${numero} x ${i} = ${numero * i}`)
 }
 for(let i = 1 ; i <= 10; i++){
    console.log(`Divisão ${numero} / ${i} = ${Math.round(numero /i)}`)
 }