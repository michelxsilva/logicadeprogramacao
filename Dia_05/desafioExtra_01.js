/*1. Calculando Fatorial de um Número
 Peça ao usuário um número inteiro positivo e calcule o fatorial desse número.
 ● Fatorial de N (N!) é o produto de todos os números inteiros positivos de 1 até N.
 ● Exemplo: 5! = 5 x4x3x2x1=120*/
 let num = 7;
let fatorial = 1; 
if (num < 0) {
    console.log('Informe um número positivo');
} else {
    for (let i = num; i > 0; i--) { 
        fatorial *= i;
    }
    console.log(`${num}! = ${fatorial}`);
}
