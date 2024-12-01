function Menu() {

    var itens = document.getElementById("Navegação-Cabeçalho");
    
    if (itens.style.transform === 'translateX(0%)') {
        itens.style.transform = 'translateX(100%)';
    } else {
        itens.style.transform = 'translateX(0%)';
    }
}