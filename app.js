let amigos = []

function adicionarAmigo() {
  const input = document.getElementById("amigo") 
  const nome = input.value.trim() 
  if (nome == "") {
    alert("Por favor, insira um nome.")
    return
  }
  amigos.push(nome) 
  input.value = "" 
  exibirAmigos()
}

function exibirAmigos() {
  const ul = document.getElementById("listaAmigos") 
  ul.innerHTML = "" 

  for (const nome of amigos) {
    const li = document.createElement("li")
    li.innerText = nome
    ul.appendChild(li) 
  }
}

function sortearAmigo() {
  const namigos = amigos.length 
  if (namigos == 0) {
    alert("Adicione um nome")
    return
  }
  const nsorteado = Math.floor(Math.random() * namigos) 
  const sorteado = amigos[nsorteado] 
  const resultado = document.getElementById("resultado")
  resultado.innerHTML = `O sorteado foi: <strong>${sorteado}</strong>`;
}
