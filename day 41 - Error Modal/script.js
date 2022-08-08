
var label = document.querySelector(".label");
var button = document.querySelector(".button");

button.addEventListener('click', function(){
      label.style.transition = ".5s"; 
      label.style.transform = "scale(0)";
});