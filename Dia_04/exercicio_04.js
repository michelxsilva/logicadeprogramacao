/* 4. Verificando Ano Bissexto
 Crie um programa que verifica se um ano é bissexto.
 ● Umanoébissexto se for divisível por 4.
 ● Masnãoébissexto se for divisível por 100, exceto se for divisível por 400.*/
 let ano = 2025
 let bissexto = ano / 4
 
 if(bissexto % 4 == 0 && bissexto % 100 != 0){
    console.log("Ano bissexto")
 }
 else{
    console.log("Não é bissexto")
 }