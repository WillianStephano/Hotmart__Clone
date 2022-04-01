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





/* Menu topicos */
//Array com os elementos
const colecaoContent = [
  {
    id: 1,
    titulo: "Criar",
    subtitulo: "Transforme seu conteúdo e comece a empreender online.",
    txt: "1. Escolha seu formato. Cursos online, treinamentos, eventos online, e-book, infográficos, planilhas, comunidades pagas. 2. Foque na experiência do seu produto. Comunidades para compartilhar conteúdos exclusivos, módulos extras, app Hotmart Sparkle, Área de Membros 3. Defina sua estratégia. Assinaturas, Pagamento único, Teste grátis, Pagamentos parcelados, Cupons de desconto, Upsell, Cross sell",
  },
  
  {
    id: 2,
    titulo: "Acelerar",
    subtitulo:
    "Defina suas estratégias e deixe a tecnologia cuidar de todo o resto.",
    txt: "Organização de leads, funis de venda, acesso aos produtos, comissões. Gerencie e hospede tudo o que você cria, de forma simples e acessível, e conte com parceiros para aumentar o seu alcance.E se ainda quiser mais, você tem toda a liberdade de fazer integrações com ferramentas fora do Universo Hotmart.",
  },
  
  {
    id: 3,
    titulo: "Gerenciar",
    subtitulo: "Tome as melhores decisões com base em relatórios precisos.",
    txt: "Acesse relatórios fáceis de entender, acompanhe de perto o andamento do seu negócio e deixe que os dados mostrem o momento ideal para fazer as melhores ofertas. E quando chegar a hora de ter um time, defina permissões e atribua responsabilidades de acordo com sua equipe ou cocriadores.",
  },
  
  {
    id: 4,
    titulo: "Escalar",
    subtitulo: "Seu negócio digital muito além do que você imaginou.",
    txt: "Com a Hotmart, você tem todas as ferramentas para expandir seu negócio para os quatro cantos do mundo, alcançar novos públicos, vender em um clique, além de aumentar as chances do seu produto ser descoberto com o Hotmart Marketplace.",
  },
];

//Seleção de elementos do HTML
const topicos = document.querySelector(".topicos");
const itemMenu = topicos.querySelectorAll(".item-menu-lateral-lista");
const tituloContent = topicos.querySelector(".titulo-topicos");
const subtituloContent = topicos.querySelector(".subtitulo-topicos");
const txtContent = topicos.querySelector(".texto-topicos");

//Item inicial
let contentAtual = 0;

//Ao carregar a pagina ira mostrar o conteudo da variavel
window.addEventListener("DOMContentLoaded", function () {
  mostrarContent();
});

//
function mostrarContent() {
  var item = colecaoContent[contentAtual];
  tituloContent.textContent = item.titulo;
  subtituloContent.textContent = item.subtitulo;
  txtContent.textContent = item.txt;
}

//Ao clicar em um elemento do array de itens do menu ele ira trocar o conteudo e mostrar na tela
itemMenu[0].addEventListener("click", function (event) {
  contentAtual = 0;
  mostrarContent();
});

itemMenu[1].addEventListener("click", function (event) {
  contentAtual = 1;
  mostrarContent();
});

itemMenu[2].addEventListener("click", function (event) {
  contentAtual = 2;
  mostrarContent();
});

itemMenu[3].addEventListener("click", function (event) {
  contentAtual = 3;
  mostrarContent();
});



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