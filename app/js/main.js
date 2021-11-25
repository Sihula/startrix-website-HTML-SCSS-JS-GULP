let navbar = document.querySelector('#menu-btn');
let menu = document.querySelector('.header .menu');

navbar.onclick = () => {
  navbar.classList.toggle('fa-times');
  menu.classList.toggle('active');
}


$('.slider__inner').slick({
  infinite: true,
  slidesToShow: 2
});

document.querySelectorAll('.aacordion-container .accordion').forEach(accordion => {
  accordion.onclick = () => {
    accordion.classList.toggle('active');
  }
})