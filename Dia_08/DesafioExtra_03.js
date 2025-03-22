/* Crie uma função que verifica se e uma palavra ou frase é um palíndromo(lê-se da mesma
 forma de trás para frente,des considerando espaços e pontuação*/
 
 
 function palindromo(frase){
    let texto = frase.replace(/\s+/g, '').toLowerCase()
    let texto_invert = frase.split('').reverse().join('').replace(/\s+/g, '').toLowerCase()
    if (texto !== texto_invert){
        console.log(`${frase} : Nâo é um palíndromo!`)
    } else{
        console.log(`${frase} : É um palíndromo!`)

    }

 }
 let frase = 'A mala nada na lama'
 console.log(palindromo(frase)) // Retorno : A mala nada na lama : É um palíndromo!