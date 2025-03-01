/* 2.Calculadora de IMC
 O Índice de Massa Corporal (IMC)é calculado dividindo o peso(em kg)pela altura(em
 metros)elevada ao quadrado.
 Crie um programa que calcula o IMC e verifica se a pessoa está dentro do peso ideal (IMC
 entre 18.5 e 24.9).*/
 let peso = 110
 let altura = 1.76
 let imc = peso / (altura * 2)
 if(imc >= 18.5 && imc <= 24.9){
    console.log("Seu IMC é: " + imc + " Parabéns você está no peso ideal!") 
 }else{
    console.log("Seu IMC é: " + imc + " Procure um médico!")
 }
