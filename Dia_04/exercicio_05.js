/*5. Simulador de Caixa Eletrônico
 Crie um programa que simula um caixa eletrônico. O usuário deve informar o valor do saque
 (apenas valores inteiros) e o programa deve informar quantas cédulas de cada valor serão
 fornecidas.
 ● Considere cédulas de R$100, R$50, R$20, R$10, R$5 e R$2.*/
 let saque = 100

 if (saque == 100){
    console.log("1 cédula de 100")
 }
 else if (saque == 50){
    console.log("1 cédula de 50")
 }
 else if (saque == 20){
    console.log("1 cédula de 20")
 }
 else if (saque == 10){
    console.log("1 cédula de 10")
 }
 else if (saque == 5){
    console.log("1 cédula de 5")
 }
 else{
    console.log("Não é possível sacar o valor especificado com as cédulas disponíveis")
 }