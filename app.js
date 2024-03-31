const nomeValor = document.querySelector('#name');
const dataValor = document.querySelector('#date');

nomeValor.addEventListener('input', () => exibirNoConsole(nomeValor.value));
dataValor.addEventListener('input', () => exibirNoConsole(dataValor.value));

function exibirNoConsole(valor) {
    console.log(valor);
}