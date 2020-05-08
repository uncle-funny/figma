
const open = document.querySelector('.burger-link');
const openMenu = document.querySelector('.burger-menu');


open.addEventListener('click', function(event){
  event.stopPropagation()
  open.classList.toggle('burger-close');
  openMenu.classList.toggle('open-menu');
});

const body = document.querySelector('body');

body.addEventListener('click', function(){
  open.classList.remove('burger-close');
  openMenu.classList.remove('open-menu');
});
