window.addEventListener('scroll', function(){
    var head = this.document.querySelector('nav');
    head.classList.toggle('sticky', window.scrollY > 0);
});

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector ('nav ul');


menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

const searchForm = document.querySelector('.nav__search');
document.querySelector('#search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
}

const userForm = document.querySelector('.nav__login');
document.querySelector('#login-btn').onclick = ()=>{
    userForm.classList.toggle('active');
}


// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     grid: {
//       rows: 2,
//     },
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });



