/*  2. Estatísticas de Números
 Peça ao usuário para inserir uma lista de números (separados por espaço) e calcule:
 ● O maior número
 ● O menor número
 ● A soma dos números
 ● A média dos números
 entrada = input("Digite números separados por espaço */

 let numeros = [1, 25, 100, 3, 9, 53, 45, 97]
 console.log(`Valor máximo: ${Math.max(...numeros)}`)
 console.log(`Valor mínimo: ${Math.min(...numeros)}`)

 let soma = 0
 for (let i = 0; i < numeros.length; i++) {
     soma += numeros[i];
 }
 console.log(`Valor total: ${soma}`)
