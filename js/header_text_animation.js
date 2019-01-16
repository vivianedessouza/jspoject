var elements; // Array dos elementos do Header.

// Esconder todos os textos.
$(function() {
  elements = document.querySelectorAll("#header-texts div");

  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  elements[0].style.display = "block";
});

var counter = 0;

// Cria um intervalo entre esconder e mostrar.
setInterval(function() {
  $("#header-texts")
    .fadeIn(500)
    .delay(3700);

  $("#header-texts").fadeOut(500, function() {
    elements[counter].style.display = "none";

    counter = counter + 1;
    if (elements.length === counter) {
      counter = 0;
    }

    elements[counter].style.display = "block";
  });
}, 2000);
