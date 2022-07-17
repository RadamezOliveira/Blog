let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    iconePesquisa.classList.remove('fa-times');
    pesquisa.classList.remove('active');
}
let iconePesquisa = document.querySelector('#icone-pesquisa');
let pesquisa = document.querySelector('.pesquisa');

iconePesquisa.onclick = () => {
    iconePesquisa.classList.toggle('fa-times');
    pesquisa.classList.toggle('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    iconePesquisa.classList.remove('fa-times');
    pesquisa.classList.remove('active');
}