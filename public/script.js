const dados = [
  {
    "id": 1,
    "titulo": "Elden Ring",
    "descricao": "Um RPG de ação de fantasia sombria épico.",
    "conteudo": "Elden Ring é um jogo eletrônico de RPG de ação desenvolvido pela FromSoftware e publicado pela Bandai Namco Entertainment. O mundo de jogo é explorado através de uma perspectiva em terceira pessoa, com os jogadores navegando livremente pelo seu mundo aberto interativo.     (finge que o texto não foi IA)",
    "categoria": "RPG",
    "autor": "FromSoftware",
    "data": "2022-02-25",
    "imagem": "img/elden-ring.png"
  },
  {
    "id": 2,
    "titulo": "Dead by Daylight",
    "descricao": "Jogo de terror multiplayer assimétrico 4v1.",
    "conteudo": "Um jogador assume o papel do Assassino selvagem, e os outros quatro jogam como Sobreviventes, tentando escapar do Assassino e evitar ser capturado, torturado e morto. Os sobreviventes jogam em terceira pessoa e têm uma melhor percepção situacional.     (finge que o texto não foi IA)",
    "categoria": "Terror",
    "autor": "Behaviour Interactive",
    "data": "2016-06-14",
    "imagem": "img/DBD.png"
  },
  {
    "id": 3,
    "titulo": "Deepwoken",
    "descricao": "Um jogo de RPG difícil com elementos de permadeath no Roblox.",
    "conteudo": "Deepwoken é um jogo com foco em exploração e combate desafiador. Descubra mistérios, desenvolva habilidades únicas e sobreviva em um mundo implacável onde cada escolha e derrota contam de forma definitiva para o seu personagem.           (finge que o texto não foi IA)",
    "categoria": "Roblox / RPG",
    "autor": "Vmonk",
    "data": "2021-12-19",
    "imagem": "img/deep.png"
}];

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("container-cards")) {
    carregarHome();
  } else if (document.getElementById("container-detalhes")) {
    carregarDetalhes();
  }
});

function carregarHome() {
  const container = document.getElementById("container-cards");
  let htmlCards = "";

  dados.forEach(item => {
    htmlCards += `
      <div class="card">
        <img src="${item.imagem}" alt="${item.titulo}">
        <div class="card-body">
          <span class="categoria">${item.categoria}</span>
          <h3>${item.titulo}</h3>
          <p>${item.descricao}</p>
          <a href="detalhes.html?id=${item.id}" class="btn">Ver Detalhes</a>
        </div>
      </div>
    `;
  });

  container.innerHTML = htmlCards;
}

function carregarDetalhes() {

  const urlParams = new URLSearchParams(window.location.search);
  const idParam = parseInt(urlParams.get("id"));

  const itemEncontrado = dados.find(item => item.id === idParam);
  const container = document.getElementById("container-detalhes");

  if (itemEncontrado) {
    container.innerHTML = `
      <div class="detalhe-produto">
        <a href="index.html" class="btn-voltar">← Voltar para a Home</a>
        <div class="detalhe-grid">
          <div class="detalhe-img">
            <img src="${itemEncontrado.imagem}" alt="${itemEncontrado.titulo}">
          </div>
          <div class="detalhe-info">
            <span class="categoria">${itemEncontrado.categoria}</span>
            <h1>${itemEncontrado.titulo}</h1>
            <p class="meta-info">Publicado por <strong>${itemEncontrado.autor}</strong> em ${itemEncontrado.data}</p>
            <p class="descricao-longa">${itemEncontrado.conteudo}</p>
          </div>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="erro-not-found">
        <h2>Item não encontrado!</h2>
        <a href="index.html" class="btn">Voltar para a Página Inicial</a>
      </div>
    `;
  }
}