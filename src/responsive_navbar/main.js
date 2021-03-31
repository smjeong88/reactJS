const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icon = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    icon.classList.toggle('active');
})