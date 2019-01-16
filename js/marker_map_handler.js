// Marker 1 - Brasil
$("#marker1").mouseover(function() {
  var message = "Preta Lab - Brasil";
  var id = "marker1-box";
  showBalloon(message, id);
});

$("#marker1").mouseleave(function() {
  var id = "marker1-box";
  hideBalloon(id);
});

// Marker 2 - São Francisco
$("#marker2").mouseover(function() {
  var message = "Preta Lab - São Francisco";
  var id = "marker2-box";
  showBalloon(message, id);
});

$("#marker2").mouseleave(function() {
  var id = "marker2-box";
  hideBalloon(id);
});

// Marker 3 - Seattle
$("#marker3").mouseover(function() {
  var message = "Preta Lab - Seattle";
  var id = "marker3-box";
  showBalloon(message, id);
});

$("#marker3").mouseleave(function() {
  var id = "marker3-box";
  hideBalloon(id);
});

function showBalloon(message, elementId) {
  $("#float-box").html("<h5>" + message + "</h5>");
  $("#float-box").addClass(elementId + " float-box");
}

function hideBalloon(elementId) {
  $("#float-box").html("");
  $("#float-box").removeClass(elementId + " float-box");
}
