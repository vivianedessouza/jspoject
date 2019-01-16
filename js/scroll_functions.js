// SOCIAL MEDIA COLOR

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var header = $("#nav_bar")[0];
  var navItems = $("#nav-elements")[0];

  if (scroll >= 100) {
    $(header).addClass("nav-bar-scrolled");
    $(navItems).css("margin-top", "32px");

    // Altera o tamanho da logo.
    var logo = $("#nav_bar .logo")[0];
    $(logo).removeClass("logo");
    $(logo).addClass("logo-scrolled");

    if (scroll > 300) {
      $(".social-media i").css("color", "#ffa897");
    }
  } else {
    $(".social-media i").css("color", "white");
    $(header).removeClass("nav-bar-scrolled");
    $(navItems).css("margin-top", "40px");

    // Retorna o tamanho da logo
    var logoScrolled = $("#nav_bar .logo-scrolled")[0];
    $(logoScrolled).removeClass("logo-scrolled");
    $(logoScrolled).addClass("logo");
  }
});
