function Menu() {

    var itens = document.getElementById("Navegação-Cabeçalho");
    
    if (itens.style.transform === 'translateX(0%)') {
        itens.style.transform = 'translateX(100%)';
    } else {
        itens.style.transform = 'translateX(0%)';
    }
}

function FtAnimado() {
    const footer = document.getElementById('Footer-do-site');
    const scrollPosition = window.innerHeight + window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight) {
      footer.style.bottom = '0px'; 
    } else {
      footer.style.bottom = '-120px'; 
    }
  }

  window.addEventListener('scroll', FtAnimado);