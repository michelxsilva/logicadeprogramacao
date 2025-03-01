/* 2. Verificando Aprovação em um Exame
 Para ser aprovado em um exame, um estudante precisa ter uma nota média maior ou igual
 a 7.0 e uma frequência maior ou igual a 75%.
 Dados:
 ● Notamédia: 8.5
 ● Frequência: 80%
 Verifique se o estudante foi aprovado*/

const { and } = require("sequelize")

 let media = 7.0
 let frequencia = 75
 let nota_aluno = 8
 let frequencia_aluno = 80

 let calculo_media = nota_aluno >= media
 let calculo_frequencia = frequencia_aluno >= frequencia
 let aprovado = calculo_media && calculo_frequencia
 if(aprovado){
    console.log("Parabéns você foi aprovado!")
 }
 else{
    console.log("Reprovado!")
 }
