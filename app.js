const dark = document.querySelector('.switch-toggle');
const header = document.querySelector('.head');
const body = document.querySelector('.main');

dark.addEventListener('click',()=>{
 dark.classList.toggle('slide');
 header.classList.toggle('head-back')
 body.classList.toggle('light-theme')
})