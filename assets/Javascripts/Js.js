//Animação de aparecer quando clicar no icone de menu hamburger
function Menu() {

    var itens = document.getElementById("Navegação-Cabeçalho");
    
    if (itens.style.transform === 'translateX(0%)') {
        itens.style.transform = 'translateX(100%)';
    } else {
        itens.style.transform = 'translateX(0%)';
    }
}

//Animação de aparecer e desaparecer quando a tela do usuario chegar no final do site
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

//Animação de aparecer e desaparecer das imagens da area de navegação
// Adiciona eventos para cada item de escolha
document.querySelectorAll('.itens-escolha').forEach((item) => {
  const image = item.querySelector('.imagem');
  const text = item.querySelector('p');

  item.addEventListener('mouseenter', () => {
      if (image) image.style.opacity = '0'; // A imagem desaparece
      if (text) text.style.opacity = '1';  // O texto aparece
  });

  item.addEventListener('mouseleave', () => {
      if (image) image.style.opacity = '1'; // A imagem reaparece
      if (text) text.style.opacity = '0';  // O texto desaparece
  });
});

