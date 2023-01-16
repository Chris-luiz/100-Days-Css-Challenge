/* Script responsavel por trocar a cor do titulo
* O javascript não consegue obter a cor aplicada do css.
* O javascript somente obtem valores CSS aplicados inline, ou seja, dentro do atributo
* Para obter as propriedades CSS, utilizei a função getComputedStyle.
*/

var boxes = document.querySelectorAll('.acordeon');
var title = document.getElementById('title');

boxes.forEach((box) => {
      box.addEventListener('click', function(){
            title.style.color = window.getComputedStyle(this).backgroundColor;
      });
});

