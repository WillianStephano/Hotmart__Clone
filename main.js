/* FAQ */
function mostrar() {
  var content = document.getElementById('div-conteudo')
  
  if (content.style.display == 'none') {
    content.style.display = 'block'
  } else {
    content.style.display = 'none'
  }
}



/* Menu */
var posicaoInicial = window.pageYOffset;
window.onscroll = function() {
  var posicaoAtual = window.pageYOffset;
  
  if (posicaoInicial > posicaoAtual) {
    document.getElementById("cabecalho").style.top = "0px";
    document.getElementById("cabecalho").style.transition ="450ms"
  } else {
    document.getElementById("cabecalho").style.top = "-100px";
  }
  posicaoInicial = posicaoAtual;
}

