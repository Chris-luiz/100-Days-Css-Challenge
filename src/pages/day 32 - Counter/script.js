var minus = document.querySelector('.minus');
var plus = document.querySelector('.plus');
var number = document.querySelector('.number');
var cont = 1;

minus.addEventListener('click', function(){
      cont--;
      
      number.animate([
            {transform: "translate(0, 20px)"},
            {transform: "translate(0, 0)"}
      ],{
            duration: 100,
            iterations: 1
      });

      number.innerHTML = cont;
})

plus.addEventListener('click', function(){
      cont++;
      
      number.animate([
            {transform: "translate(0, -20px)"},
            {transform: "translate(0, 0)"}
      ],{
            duration: 100,
            iterations: 1
      });

      number.innerHTML = cont;
})
