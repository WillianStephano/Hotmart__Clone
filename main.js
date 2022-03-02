/* FAQ */
function mostrar() {
  var item = document.getElementById('li-principal')
  var content = document.getElementById('div-conteudo')
  
  item.classList.add('li-principal_active')
  content.style.display = 'block'   
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

