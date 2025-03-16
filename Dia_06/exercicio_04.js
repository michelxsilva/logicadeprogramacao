/* Peça ao usuário para inserir uma lista de números (separados por espaço) e exiba a lista
 em ordem crescente e decrescente*/
 let lista = [120, 5, 47, 81, 22, 17, 35, 2, 90]
 lista.sort((a, b) =>{
    return a - b
 })
 console.log(`Ordem crescente: ${lista}`)
 lista.sort((a, b) =>{
    return b - a
 })
 console.log(`Ordem decrescente: ${lista}`)