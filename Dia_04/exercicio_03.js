/*
 3.ClassificaçãodeIdade
 Crie um programa que classifica a idade de uma pessoa em:
 ● Criança:0a12anos
 ● Adolescente:13a17anos
 ● Adulto:18a59anos
 ● Idoso:60anosoumais*/

 let idade = -1

 if (idade > 0 && idade <= 12){
    console.log("Você é uma criança!")
 }
 else if (idade >= 13 && idade <= 17){
    console.log("Você é um adolescente")
 }
 else if (idade >= 18 && idade <= 59){
    console.log("Você é um adulto")
 }
 else if (idade >= 60){
    console.log("Você é um idoso")
 }
 else{ console.log("Idade invalída")}