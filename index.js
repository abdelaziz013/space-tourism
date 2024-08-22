const menuButton = document.getElementById('btnHamburger');
const closeButton = document.getElementById('close');
const mobileMenu = document.querySelector('.nav');
closeButton.addEventListener('click',()=>{
  mobileMenu.classList.add('hide')
  mobileMenu.classList.remove('show')
})
menuButton.addEventListener('click',()=>{
  mobileMenu.classList.add('show');
  mobileMenu.classList.remove('hide')
})
