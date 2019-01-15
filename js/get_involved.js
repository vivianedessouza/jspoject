//ENVOLVER-SE

// ao passar o mouse a imagem aumenta/ diminui de tamanho e entra e sai uma transição
$(document).ready(function() {
  $(".get_img").hover(
    function() {
      $(this).addClass("transition");
      $(".get_main").animate({ width: "300px", height: "210px" });
    },
    function() {
      $(this).removeClass("transition");
      $(".get_main").animate({ width: "100px", height: "150px" });
    }
  );
});
