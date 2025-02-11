//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

// função para adicionar amigos
function adicionarAmigo() {
    let novoNome = document.getElementById("amigo").value;

    if (novoNome == '') return alert('Por favor, insira um nome!');
    
    amigos.push(novoNome);
    limparInput();
    console.log(amigos)
    
}
// Limpar campo do input
function limparInput() {
    let input = document.getElementById("amigo");
    input.value = '';    
}
