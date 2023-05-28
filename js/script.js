const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navvbar = document.querySelector('.navvbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navvbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navvbar.classList.remove('open');
}