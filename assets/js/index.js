const menuHamburguer = document.querySelector('.menu-hamburguer');
const listMenu = document.getElementsByClassName('navigation')[0];
console.log(listMenu);

menuHamburguer.addEventListener('click',(e)=>{
    e.target.classList.toggle('active');
    listMenu.classList.toggle('active');
})