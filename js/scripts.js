$(document).ready(function() {

  var elements = ["head", "paragraph", "image"];

  elements.forEach(function(element) {
    $("." + element).click(function(event) {
    alert("This is a " + element);

  });
  });
});
