function revelarResposta() {
  var resposta = document.querySelector("#resposta");
  resposta.classList.toggle("blur");
}

function proximaPergunta(proximaPergunta) {
  var pergunta = document.querySelector("#cardContainer");
  pergunta.innerHTML = "";

  var cardDiv = document.createElement("div");

  cardDiv.classList.add("card", "animate__animated", "animate__backInRight");

  console.log(proximaPergunta);

  cardDiv.innerHTML = `
    <div class="card-pergunta centralizar">
      <h1 class="card-titulo">O que é ${proximaPergunta.title}?</h1>
    </div>

    <div id="resposta" class="card-resposta blur">
      <p>
        ${proximaPergunta.description}
      </p>
    </div>
  `;
  pergunta.appendChild(cardDiv);
}

function buscarInformacao() {
  fetch("https://flash.quickstaart.com/random")
    .then(function (resultado) {
      return resultado.json();
    })
    .then(function (resultadoJson) {
      proximaPergunta(resultadoJson);
    });
}

window.addEventListener("load", buscarInformacao);
