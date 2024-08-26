const menuButton = document.getElementById('btnHamburger');
const closeButton = document.getElementById('close');
const mobileMenu = document.querySelector('.nav');

const listItems = document.querySelectorAll('.nav__list--item');

let activeItem = document.querySelector('.nav__list--item-active');

closeButton.addEventListener('click', () => {
  mobileMenu.classList.add('hide');
  mobileMenu.classList.remove('show');
});
menuButton.addEventListener('click', () => {
  console.log('clicked');
  closeSideMenu()
});

listItems.forEach(item => {
  item.addEventListener('click', handleItemClick);
});

function handleItemClick(event) {
  closeSideMenu()
  // event.preventDefault();
  // event.preventDefault();
  // activeItem = event.currentTarget;
  // window.location.assign(activeItem.querySelector('a').getAttribute('href'));
  // console.log(activeItem);
  // listItems.forEach(item => {
  //   if (item === activeItem) {
  //     item.classList.add('nav__list--item-active');
  //   } else {
  //     item.classList.remove('nav__list--item-active');
  //   }
  //   event.preventDefault();
  // });

}

function closeSideMenu() {
  mobileMenu.classList.add('show');
  mobileMenu.classList.remove('hide');
}



