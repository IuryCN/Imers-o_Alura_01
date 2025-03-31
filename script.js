document.addEventListener("DOMContentLoaded", function () {
  function converterMoeda(valor, moeda, taxa, simbolo) {
    if (isNaN(valor) || valor <= 0) {
      return "Por favor, insira um valor válido.";
    }

    let convertido = (valor * taxa).toFixed(2);
    return `💲${valor} USD (Dólar Americano) equivale a ${simbolo} ${convertido} ${moeda}.`;
  }

  function exibirResultados() {
    const valorDolar = parseFloat(document.getElementById("valorDolar").value);
    const resultadosDiv = document.getElementById("resultados");

    if (isNaN(valorDolar) || valorDolar <= 0) {
      alert("Por favor, insira um valor válido em dólares.");
      return;
    }

    resultadosDiv.innerHTML = "";

    const moedas = [
      { nome: "Reais", taxa: 5.72, simbolo: "R$" },
      { nome: "Euros", taxa: 0.93, simbolo: "€" },
      { nome: "Wons Sul-Coreanos", taxa: 1474, simbolo: "₩" }
    ];

    moedas.forEach((moeda) => {
      let resultado = converterMoeda(
        valorDolar,
        moeda.nome,
        moeda.taxa,
        moeda.simbolo
      );
      let paragrafo = document.createElement("p");
      paragrafo.textContent = resultado;
      resultadosDiv.appendChild(paragrafo);
    });
  }

  document
    .getElementById("botaoConversao")
    .addEventListener("click", exibirResultados);

  document
    .getElementById("valorDolar")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        exibirResultados();
      }
    });
});

