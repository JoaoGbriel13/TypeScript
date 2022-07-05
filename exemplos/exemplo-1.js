"use strict";
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let botao = document.getElementById('botao');
function soma(n1, n2, devePrintar, frase) {
    let resultado = n1 + n2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return n1 + n2;
}
let devePrintar = true;
let frase = "O valor é: ";
if (botao) {
    botao.addEventListener("click", () => {
        if (input1 && input2) {
            console.log(soma(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
    });
}
