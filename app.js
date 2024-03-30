const botaoAtivado = document.querySelector('#botao');

botaoAtivado.addEventListener('click', () => {
    const nomeValor = document.querySelector('#name');
    const dataValor = document.querySelector('#date');
    const valorNome = nomeValor.value;
    const valorData = dataValor.value;
    nomeValor.addEventListener('input', () => exibirNoConsole(valorNome));
    dataValor.addEventListener('input', () => exibirNoConsole(valorData));
}); 

function exibirNoConsole(valor) {
    console.log(valor);
}