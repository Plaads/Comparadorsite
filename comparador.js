// comparador.js
function comparar(){
// Obtém os valores dos produtos e converte para números
let p1 = parseFloat(document.getElementById("produto1").value);
let p2 = parseFloat(document.getElementById("produto2").value);
// Variáveis para armazenar o resultado e a economia
let resultado = "";
let economia = 0;
// Verifica se os valores são válidos
if(isNaN(p1) || isNaN(p2)){
    document.getElementById("resultado").innerText = "Digite os dois preços!";
    return;
}
// Compara os preços e calcula a economia
if(p1 < p2){
    economia = p2 - p1;
    resultado = "Produto 1 é mais barato. Você economiza R$ " + economia.toFixed(2);
}
else if(p2 < p1){
    economia = p1 - p2;
    resultado = "Produto 2 é mais barato. Você economiza R$ " + economia.toFixed(2);
}
else{
    resultado = "Os dois produtos têm o mesmo preço.";
}
// Exibe o resultado
document.getElementById("resultado").innerText = resultado;
}

//Muita coisa para um codigo, sou iniciante, mas estou aprendendo!