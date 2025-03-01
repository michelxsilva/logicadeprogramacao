/*3.Par ou Ímpar
 Crie um programa que solicita um número inteiro ao usuário e verifica se ele é par ou ímpar.*/

 let numero = 5000
 let par_ou_impar = (numero % 2) === 0
 if(par_ou_impar){
    console.log("O número " + numero + " é par")
 }
 else{
    console.log("O número " + numero + " é impar")
 }
 