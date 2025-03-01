/* 3. Oferta Especial
 Uma loja oferece um desconto se o cliente comprar mais de 10 itens ou se o valor total da
 compra for superior a R$100.
 Dados:
 ● Quantidade de itens: 8
 ● Valor total: R$120
 Verifique se o cliente tem direito ao desconto.*/
let itens = 8
let valor_total = 120
let desconto = itens >= 10 || valor_total >= 100
if(desconto){
    console.log('Desconto Aprovado!')
}
else{
    console.log("Desconto Reprovado!")
}