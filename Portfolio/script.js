
function init(){
      var img = document.querySelectorAll('.projects');
      
      for(let i=0;i<img.length;i++){
            img[i].addEventListener('click', function(){
                  this.classList.toggle('project-card');
            });
      }
}

init();