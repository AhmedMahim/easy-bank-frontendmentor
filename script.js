const menuicon = document.querySelector('.menu-icon img'),
    mobileMenu = document.querySelector('.mobile-menu');

menuicon.addEventListener('click', () => {    
        menuicon.src = './images/icon-close.svg';
        mobileMenu.classList.toggle('active');
        changIcon()
})

const changIcon = () => {
    if(mobileMenu.classList.contains('active')){
        menuicon.src = './images/icon-close.svg';
    } else {
        menuicon.src = "./images/icon-hamburger.svg";
    }
}
changIcon()

