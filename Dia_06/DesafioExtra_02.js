/* 2.AnalisadordeNotas
 Crie um programa que recebe as notas dos alunos em uma lista e:
 ● Exibe a maior e a menor nota.
 ● Calcula a média da turma.
 ● Exibe as notas acima da média.*/


 let notas = [7,8,5,9,3,6,4,10,9,2]

 // Maior nota
 let maior_nota = Math.max(...notas)
 console.log(`Maior nota: ${maior_nota}`)

 //Menor nota
 let menor_nota = Math.min(...notas)
 console.log(`Menor nota: ${menor_nota}`)

// Media da turma
 let soma = 0
 for(let i = 0; i < notas.length; i++){
    soma += notas[i]
 }
let media = soma / notas.length
console.log(`media da turma: ${media}`)

//Notas acima da média
let notas_acima_da_media = notas.filter(n => n > media);
notas_acima_da_media.forEach(n => console.log(`Nota acima da média : ${n}`))