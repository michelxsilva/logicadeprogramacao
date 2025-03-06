/*5.AdivinheoNúmero
 Crie um jogo em que o programa escolhe um número aleatório entre 1 e 100,e o usuário
 tenta adivinhar.O programa deve dar dicas se o número é maior ou menor do que o palpite.
 O jogo continua até o usuário acertar.*/
let numero = Math.floor(Math.random() * 10) + 1
let usuario = 4

while (numero == usuario){
    console.log(`Usuário : ${usuario}`)
    console.log(`Computador : ${numero}`)

    console.log("Você venceu!")
    break
}