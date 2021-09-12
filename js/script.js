// JS for mobile menu
const closeBtn = document.querySelector('#menu-close');
const mobileBtn = document.querySelector('#mobile-btn');
const mobileMenu = document.querySelector('#menu-sm');

function open () {
    mobileMenu.classList.replace('hidden', 'block');
};

function close () {
    mobileMenu.classList.replace('block', 'hidden');
};

mobileBtn.addEventListener('click', function () {
    open ()
});

closeBtn.addEventListener('click', function () {
    close()
});

// Animation goes here
document.addEventListener('scroll', function () {
    const jumbotron = document.querySelector('#jumbotron')
    const jumbotronRect = jumbotron.getBoundingClientRect()
    const header = document.querySelector('header')

    if(jumbotronRect.top < 0) {
        header.classList.remove('bg-opacity-40')
    }
    if(jumbotronRect.top == 0) {
        header.classList.add('bg-opacity-40')
    }
    let distance = window.scrollY
    let box = document.querySelector('#box')
    
    box.style.transform = `translateY(${distance/2}px)`
})
