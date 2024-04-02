// Seleciona os elementos de input e o botão
const nomeValor = document.querySelector('#name');
const dataValor = document.querySelector('#date');
const botao = document.querySelector("button");
// Array para armazenar os dados das pessoas
const dadosDaPessoa = [];

// Adiciona um ouvinte de evento de clique ao botão
botao.addEventListener('click', (event)=> {
    // Previne o comportamento padrão do formulário de ser enviado
    event.preventDefault();

    // Obtém os valores digitados nos campos de nome e data
    const nome = nomeValor.value;
    const data = dataValor.value;
    // Cria um objeto pessoa e o adiciona ao array
    dadosDaPessoa.push({ nome, data });
    
    // Salva o array no localStorage como uma string JSON
    localStorage.getItem('pessoas', JSON.stringify(dadosDaPessoa));
    console.log(dadosDaPessoa);
});
