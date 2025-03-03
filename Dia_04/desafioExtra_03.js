/*3. Calculadora de Tarifas de Táxi
 Uma empresa de táxi cobra uma tarifa básica de R$4.00, mais R$0.25 por quilômetro
 rodado. Crie um programa que calcula o valor total da corrida com base na distância
 percorrida.*/
 let tarifa_basica = 4
 let quilometro_rodado = 0.25
 let distancia_corrida = 150

 let valor_total = tarifa_basica + (quilometro_rodado * distancia_corrida)
 console.log(`Distância Percorrida : Km ${distancia_corrida}`)
 console.log(`Valor do total da corrida: R$ ${valor_total.toFixed(2)}`)