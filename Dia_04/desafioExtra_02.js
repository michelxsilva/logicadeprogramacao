/* 2.JogoPedra,PapelouTesoura
 Crie um programa que simula o jogo "Pedra,Papel ou Tesoura"entre o usuário e o
 computador.*/
 
let jogo = ['Pedra', 'Papel', 'Tesoura']
let computador = jogo[Math.floor(Math.random()* jogo.length)]
let index = jogo.unshift('')
let usuario = jogo[1]
if((computador === "Pedra" && usuario === "Tesoura") ||
(computador === "Papel" && usuario === "Pedra") ||
(computador === "Tesoura" && usuario === "Papel") 
){
    console.log("Voce Perdeu!")
    console.log(`Escolha do computador ${computador}`)
    console.log(`Escolha do usuário ${usuario}`)
}
else if((computador === "Tesoura" && usuario === "Pedra") ||
        (computador === "Papel" && usuario == "Tesoura") ||
        (computador === "Pedra" && usuario === "Papel")) 

 {       console.log("Voce Venceu!")
        console.log(`Escolha do computador ${computador}`)
        console.log(`Escolha do usuário ${usuario}`) }

else {
    console.log("Empate jogue novamente!")
    console.log(`Escolha do computador ${computador}`)
    console.log(`Escolha do usuário ${usuario}`)}