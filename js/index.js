

let textarea = document.getElementById('entrada-textarea');
let resultado = document.getElementById('resultado');
let resultadoDefault = document.getElementById('resultado-default');
let resultadoText = document.getElementById('resultado-texto');


const btnCriptografar = document.getElementById('entrada-botao-criptografar').addEventListener('click', () => {
    if (textarea.value !== '') {
        resultadoDefault.style.display = 'none';
        resultado.style.display = 'flex';
        resultadoText.innerText = criptografar(textarea.value);
    } else {
        alert('digite um texto primeiro');
    }
});

const btnDescriptografar = document.getElementById('entrada-botao-descriptografar').addEventListener('click', () => {
    if (textarea.value !== '') {
        resultadoDefault.style.display = 'none';
        resultado.style.display = 'flex';
        resultadoText.innerText = descriptografar(textarea.value);
    } else {
        alert('digite um texto primeiro');
    }
});

function criptografar(texto) {
    let textoCriptografado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    return textoCriptografado;
}


function descriptografar(texto) {
    let textoCriptografado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    return textoCriptografado;
}



/* A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/