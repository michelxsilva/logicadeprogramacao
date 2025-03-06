/*  2. Calculando a Soma dos Números de 1 a N
Peça ao usuário um número inteiro positivo N e calcule a soma de todos os números de 1 a N*/
let n = 5

let soma = 0
for(let i = 1; i <= n; i++){
    soma +=  i
    
}
console.log(`A soma dos números de 1 a ${n} é: ${soma}`)
