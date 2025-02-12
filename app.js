//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

// função para adicionar amigos
function adicionarAmigo() {
    let novoNome = document.getElementById("amigo").value;

    if (novoNome == '') return alert('Por favor, insira um nome!');
    
    amigos.push(novoNome);
    limparInput();

    listarAmigos();    
}

// Limpar campo do input
function limparInput() {
    let input = document.getElementById("amigo");
    input.value = '';    
}

function listarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const element = amigos[i];

        let li = document.createElement('li');
        li.textContent = element;
        listaAmigos.appendChild(li);
    }        
}
