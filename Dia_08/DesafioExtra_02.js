/* Crie uma função que calcula a distância  
euclidiana entre dois pontos emu mplano cartesiano.*/

function calculaDistancia(x1, y1, x2, y2) {
    let ponta_a = x2 - x1;
    let ponta_b = y2 - y1;
    
    return Math.sqrt(Math.pow(ponta_a, 2) + Math.pow(ponta_b, 2));
}
let dist = calculaDistancia(2, 3, 5, 7).toFixed(2)
console.log(`A distância entre os pontos é: ${dist}`); // Retorna 5.00



