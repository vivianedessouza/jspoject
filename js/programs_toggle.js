// Esconde todos os P.
$(function() {
  $(".text-programas p").hide();
});

const items = document.getElementsByClassName("text-programas");
let states = []; // Array do estado dos elementos.

for (let i = 0; i < items.length; i++) {
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

$(document).ready(function() {
  $("#python_img").width(500);
  $("#python_img").mouseover(function() {
    $(this).css("cursor", "pointer");
    $(this).animate({ width: "500px" }, "slow");
    $(document).ready(function() {
      $("#python_img").css("filter", "brightness(0.3)");
    });
  });

  $("#python_img").mouseout(function() {
    $(this).animate({ width: "400px" }, "slow");
    $(document).ready(function() {
      $("#python_img").css("filter", "brightness(1)");
    });
  });
});
