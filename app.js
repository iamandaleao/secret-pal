// Cria um array vazio para armazenar os nomes dos amigos
let amigos = [];

// Função chamada ao clicar no botão "Adicionar"
function adicionarAmigo() {
  // Pega o campo de input onde o nome é digitado
  const input = document.getElementById("amigo");
  const nome = input.value.trim(); // Remove espaços extras do nome

  // Verifica se o campo está vazio
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return; // Sai da função sem fazer mais nada
  }

  // Adiciona o nome ao array
  amigos.push(nome);

  // Limpa o campo de input
  input.value = "";

  // Atualiza a lista na tela
  atualizarLista();
}

// Função para mostrar os nomes adicionados na tela
function atualizarLista() {
  // Pega o elemento <ul> que vai exibir a lista de amigos
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpa a lista antes de atualizar

  // Percorre todos os nomes no array amigos
  for (let i = 0; i < amigos.length; i++) {
    const item = document.createElement("li"); // Cria um item de lista
    item.textContent = amigos[i]; // Define o texto do <li> com o nome do amigo
    lista.appendChild(item); // Adiciona o <li> dentro da <ul>
  }
}

// Função chamada ao clicar em "Sortear amigo"
function sortearAmigo() {
  // Pega o elemento onde será mostrado o resultado do sorteio
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpa resultados anteriores

  // Se não houver nenhum nome adicionado
  if (amigos.length === 0) {
    const item = document.createElement("li");
    item.textContent = "Nenhum nome adicionado.";
    resultado.appendChild(item);
    return;
  }

  // Gera um índice aleatório com base no tamanho da lista
  const indice = Math.floor(Math.random() * amigos.length);
  const sorteado = amigos[indice]; // Pega o nome correspondente ao índice

  // Cria um novo <li> com o nome sorteado
  const item = document.createElement("li");
  item.innerHTML = `O sorteado foi: <strong>${sorteado}</strong>`;
  resultado.appendChild(item); // Adiciona o item à lista de resultado
}
