/* Menu */
var posicaoInicial = window.pageYOffset;
window.onscroll = function () {
  var posicaoAtual = window.pageYOffset;
  
  if (posicaoInicial > posicaoAtual) {
    document.getElementById("cabecalho").style.top = "0px";
    document.getElementById("cabecalho").style.transition = "450ms";
  } else {
    document.getElementById("cabecalho").style.top = "-100px";
  }
  posicaoInicial = posicaoAtual;
};



/* FAQ */
//Selecionando elementos do HTML
const faq = document.querySelector(".duvidas");
const elementos = faq.querySelectorAll(".li-principal");
let conteudoQuest = faq.querySelector(".conteudo-duvidas");

/*Para cada elemento dentro do array "elementos" ele vai adicionar um evento que tem como objetivo
pegar o elemento irmao colocar na variavel que entao ira mudar a classe que mostra o conteudo*/
elementos.forEach(function (ele) {
  ele.addEventListener("click", function (e) {
    let resposta = e.currentTarget.nextElementSibling;
    let perguntaAtual = e.currentTarget;
    resposta.classList.toggle("mostrar-conteudo");
    perguntaAtual.classList.toggle("li-principal_active");
  });
});