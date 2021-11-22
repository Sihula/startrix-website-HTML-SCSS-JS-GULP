let navbar = document.querySelector('#menu-btn');
let menu = document.querySelector('.header .menu');

navbar.onclick = () => {
  navbar.classList.toggle('fa-times');
  menu.classList.toggle('active');
}
