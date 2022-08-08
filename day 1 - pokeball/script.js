document.getElementById('pokeball-visor').addEventListener('click', function(){
      document.getElementById('pokeball-up').classList.toggle('open-up');
      document.getElementById('pokeball-blank-up').classList.toggle('open-up');
     
      document.getElementById('pokeball-down').classList.toggle('open-down');
      document.getElementById('pokeball-blank-down').classList.toggle('open-down');
});