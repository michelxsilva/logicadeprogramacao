/*Série Fibonacci
 Exiba os primeiros N termos da série de Fibonacci.
 ● Asérie de Fibonacci começa com 0 e 1, e cada termo subsequente é a soma dos
 dois anteriores.
 ● Exemplo: 0, 1, 1, 2, 3, 5, 8, 13...*/
let n = 8
let termo1 = 0
let termo2 = 1
let contador = 0

if (n < 0){
    console.log(`Informe um número positivo`)
}
else if ( n == 1){
    console.log(`Série Fibonacci até, ${n}, termo:`)
    console.log(termo1)
}else{
    console.log(`"Série Fibonacci:`)
    while (contador < n) {
        console.log(termo1)
        let proximo = termo1 + termo2
        termo1 = termo2
        termo2 = proximo
        contador += 1
    }
}