
const open = document.querySelector('.burger-link');
const openMenu = document.querySelector('.burger-menu');
const body = document.querySelector('body');


open.addEventListener('click', function(){
  open.classList.toggle('burger-click');
  openMenu.classList.toggle('open-menu');
});
