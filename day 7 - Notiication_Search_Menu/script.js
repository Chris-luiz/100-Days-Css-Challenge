var search = document.querySelector(".notification-heading-search");

search.addEventListener('click', function(){
    document.querySelector('.notification-search').classList.toggle('notification-search-show');
    document.querySelector('.notification-heading-menu').classList.toggle('hide');
    document.querySelector('.notification-heading-title').classList.toggle('hide');
});

var menu = document.querySelector('.notification-heading-menu');

menu.addEventListener('click', function(){
    document.querySelector(".lateral-menu").classList.toggle('move-lateral-menu');
    document.querySelector(".notification").classList.toggle('move-notification');
    
});