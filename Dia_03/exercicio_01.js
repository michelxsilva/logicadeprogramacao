//  Dia 3: Operadores e Expressões
/*Exercícios Práticos com Situações do Dia a Dia
 1. Calculando o Troco
 Você foi a uma padaria e comprou alguns itens:
 ● Pão:R$3.50
 ● Leite: R$4.20
 ● Café: R$2.80
 Você pagou com uma nota de R$20. Calcule quanto de troco você deve receber.*/

 let pao =  3.5
 let leite = 4.2
 let cafe = 2.8
 let valor_pago = 20

 let total_compra = pao + leite + cafe
 let troco = valor_pago - total_compra
 console.log("Valor total da compra: R$ " + total_compra.toFixed(2))
 console.log("Valor pago: R$ " + valor_pago.toFixed(2))
 console.log("Valor do troco: R$ " + troco.toFixed(2))

 