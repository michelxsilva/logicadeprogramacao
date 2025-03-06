/* 4. Contando Números Pares e Ímpares
 Gere uma lista de números de 1 a 20 e conte quantos são pares e quantos são ímpares*/
 let pares = 0
 let impares  = 0
 
 for(let i = 0; i <= 20; i++){
    if(i % 2 == 0){
        pares += 1
    }
    else{
        impares += 1
    }
 }
 console.log(`Quantidade de números pares: ${pares}`)
 console.log(`Quantidade de números impares: ${impares}`)