// Script pour les effets de la navigation
var links = document.querySelectorAll("nav a");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", function() {
    this.style.color = "red";
  });
  links[i].addEventListener("mouseout", function() {
    this.style.color = "black";
  });
}

// Script pour les effets de la vidéo
var videos = document.querySelectorAll("video");
for (var i = 0; i < videos.length; i++) {
  videos[i].addEventListener("mouseover", function() {
    this.setAttribute("controls", "controls");
  });
  videos[i].addEventListener("mouseout", function() {
    this.removeAttribute("controls");
  });
}
