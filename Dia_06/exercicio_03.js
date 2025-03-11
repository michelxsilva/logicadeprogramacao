/*Contagem de Caracteres em uma String
 Peça ao usuário para inserir uma frase e conte quantas vezes cada letra aparece*/
 let frase = 'Tenha uma otima semana'.toLowerCase().replace(/\s/g, ''); 
 let contador = {};
 for (let i = 0; i < frase.length; i++) {
     let letra = frase[i];
     if (contador[letra]) {
         contador[letra]++; 
     } else {
         contador[letra] = 1; 
     }
 }
 
 console.log(contador);
 