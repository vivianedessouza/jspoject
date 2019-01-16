// Esconde todos os P.
$(function() {
  $(".text-programas p").hide();
});

var items = document.getElementsByClassName("text-programas");
var states = []; // Array do estado dos elementos.

for (var i = 0; i < items.length; i++) {
  states[i] = false; // Inicializa o array com todos os estados em falso.
  items[i].setAttribute("id", i); // Set id para os elementos.

  items[i].addEventListener("click", function() {
    var arrayPosition = this.id;
    var elementState = states[arrayPosition]; // Obtem o estado atual do elemento selecionado do Array.
    var elementSelected = this.querySelector("p"); // Get element P inside the clicked DIV.
    var chevronIcon = this.querySelector("i"); // Get icon

    if (elementState) {
      elementSelected.style.display = "none";
      chevronIcon.style.transform = "rotate(360deg)";
    } else {
      elementSelected.style.display = "block";
      chevronIcon.style.transform = "rotate(180deg)";
    }

    states[arrayPosition] = !elementState; // Update the array with the new value state.
  });
}
