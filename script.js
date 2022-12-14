//navbar in responsive mood

let toggle = document.getElementById('toggle');
let navMenu = document.getElementById('menu');
let togglebutton = document.querySelector('.toggle-button')


toggle.addEventListener('click', menuOPen);

function menuOPen() {
    console.log("hi")
    togglebutton.classList.toggle('open')
    if (togglebutton.classList.contains('open')) {
        navMenu.classList.add('open')
        navMenu.style.maxHeight = 250 + 'px';
    } else {
        console.log('opened')
        navMenu.removeAttribute('style')
        navMenu.classList.remove('open')


    }
}


//changing the subscribe button content to icon 
let signInButton = document.querySelector('.sign-in-button');
let subscribe = document.querySelector('.subscribe');
window.setInterval(()=> {
if (window.innerWidth < 767 ) {
    signInButton.innerHTML = '<ion-icon name="log-in-outline"></ion-icon>';
    subscribe.innerHTML = '<ion-icon name="person-add-outline"></ion-icon>';
} else {
    signInButton.innerHTML = 'Sing in';
    subscribe.innerHTML = 'subscribe';
}}, 1000)