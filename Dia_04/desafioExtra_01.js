/*
1.AprovandoEmpréstimoBancário
 Crie um programa para uma instituição bancária que analisa o pedido de empréstimo.
 ● O cliente deve informar o valor do empréstimo,a renda mensal e o número de
 parcelas.
 ● O empréstimo será aprovado se o valor da parcela não exceder 30% da renda
 mensal*/
let = valor_emprestimo = 80000
let = renda_mensal = 5000
let = numero_parcelas = 64

let valor_parcela = valor_emprestimo / numero_parcelas
let margem  = renda_mensal * (30/100)

if(valor_parcela < margem){
    console.log(`Emprestimo aprovado`)
    console.log(`Valor do Emprestimo R$ ${valor_emprestimo.toFixed(2)}`)
    console.log(`Valor da parcela R$ ${valor_parcela.toFixed(2)}`)
    console.log(`Número de parcelar ${numero_parcelas}`)
}
else{
    console.log(`Emprestimo negado`)
    
    console.log(`Valor compromete mais de 30% da sua renda de R$ ${renda_mensal}`)
}
