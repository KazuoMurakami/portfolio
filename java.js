// Anexar um evento de clique ao elemento com a classe 'icone'
document.querySelector('.icone').addEventListener("click", function(){
    // Quando o elemento é clicado, alternar a classe 'show-menu' no elemento com a classe 'container'
    document.querySelector(".container").classList.toggle("show-menu");
  });
  
  // Anexar um evento de clique ao elemento com a classe 'button'
  document.querySelector('.button').addEventListener("click", function(){
    // Quando o elemento é clicado, adicionar a classe 'show-menu' ao elemento com a classe 'container'
    document.querySelector(".container").classList.add("show-menu");
  });
  