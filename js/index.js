
// Seleciona elementos da DOM
let textarea = document.getElementById('entrada-textarea');
let resultado = document.getElementById('resultado');
let resultadoDefault = document.getElementById('resultado-default');
let resultadoText = document.getElementById('resultado-texto');

// Botão de criptografar mensagem e lógica
const btnCriptografar = document.getElementById('entrada-botao-criptografar').addEventListener('click', () => {
    if (textarea.value !== '') {
        resultadoDefault.style.display = 'none';
        resultado.style.display = 'flex';
        resultadoText.innerText = criptografar(textarea.value);
    } else {
        alert('digite um texto primeiro');
    }
});

// Botão de descriptografar mensagem e lógica
const btnDescriptografar = document.getElementById('entrada-botao-descriptografar').addEventListener('click', () => {
    if (textarea.value !== '') {
        resultadoDefault.style.display = 'none';
        resultado.style.display = 'flex';
        resultadoText.innerText = descriptografar(textarea.value);
    } else {
        alert('digite um texto primeiro');
    }
});

// Função auxiliar para criptografar a mensagem
function criptografar(textoCriptografar) {
    let textoCriptografado = textoCriptografar.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    return textoCriptografado;
}

// Função auxiliar para descriptografar a mensagem
function descriptografar(textoDescriptografar) {
    let textoDescriptografado = textoDescriptografar.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    return textoDescriptografado;
}

//Seletor de conteúdo copiável
let textoCopiado = document.getElementById('resultado-texto');

// Função assíncrona que copia o texto para clipboard
const copiarConteudo = async () => {
    try {
        await navigator.clipboard.writeText(textoCopiado.innerHTML);
        console.log('Texto copiado para a área de transferência');
    } catch (erro) {
        console.error('Falha ao copiar: ', erro);
    }
}



/* A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/