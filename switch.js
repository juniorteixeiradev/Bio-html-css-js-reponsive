const pegarBotao = document.querySelector("#switch button");
const pegarHtml = document.querySelector("body");
    pegarBotao.addEventListener("click", function() {
      pegarHtml.classList.toggle("light");
    })