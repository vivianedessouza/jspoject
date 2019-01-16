//SOBRE - THUMBS

// Guardar num array todos os elementos da classe
var thumbs = document.getElementsByClassName("thumb");

// Seleciona o primeiro thumb
selectElement(thumbs[0]);

var selectedThumb = thumbs[0];

// Ciclos que dá tantas voltas quanto ao número de elementos do array
for (var i = 0; i < thumbs.length; i++) {
  // add um event listener a cada um dos thumbs
  $(thumbs[i]).click(function() {
    // Troca a imagem principal
    $("#main-image")[0].src = this.src;

    // Tira a borda do último thumb selecionado.
    $(selectedThumb).removeClass("thumb-selected");

    // Seleciona o thumb clicado
    selectElement(this);

    // Guarda o ultimo thumb selecionado.
    selectedThumb = this;
  });
}

function selectElement(element) {
  $(element)
    .last()
    .addClass("thumb-selected");
}
