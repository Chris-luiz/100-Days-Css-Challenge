var imgs = document.querySelectorAll('.img');

imgs.forEach(element => {
    element.addEventListener('click', function(){
        this.classList.toggle('active');
    })
});