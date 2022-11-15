
document.querySelector('.icone').addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu"); //toggle funciona como um interruptor,acender e apagar.
})

document.querySelector('.button').addEventListener("click", function(){
    document.querySelector(".container").classList.add("show-menu"); // add adiciona permanentemente essa clase até que ocorra uma remoção
})
