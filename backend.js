let contador = 0;
let perCliques = 1;
let preco = 40;
let bonusCompra = 1;

const valor = document.getElementById("valor");
const botao = document.getElementById("btn");
const reset = document.getElementById("reset");
const upgrade = document.getElementById("mult");
const ganhosCliques = document.getElementById("cliques");

botao.addEventListener("click", function() {
  contador += perCliques;
  valor.textContent = contador;
});

upgrade.addEventListener("click", function() {
  if (contador >= preco) {

    // paga pelo upgrade
    contador -= preco;
    valor.textContent = contador;

    // aplica o upgrade
    perCliques += bonusCompra;

    // prepara próxima compra
    preco += 40;

    // atualiza textos
    upgrade.textContent = "Comprar +" + bonusCompra + " (por " + preco + " cliques)";
    ganhosCliques.textContent = "Ganhos por clique: +" + perCliques;

  } else {
    let falta = preco - contador;
    alert("Você precisa de mais " + falta + " cliques para comprar o upgrade!");
  }
});
