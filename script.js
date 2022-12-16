//navbar in responsive mood

let toggle = document.getElementById('toggle');
let navMenu = document.getElementById('menu');
let togglebutton = document.querySelector('.toggle-button')


toggle.addEventListener('click', menuOPen);

function menuOPen() {
    togglebutton.classList.toggle('open')
    if (togglebutton.classList.contains('open')) {
        navMenu.classList.add('open')
        navMenu.style.maxHeight = 250 + 'px';
    } else {
        navMenu.removeAttribute('style')
        navMenu.classList.remove('open');
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

//make a counter
let cards = document.querySelectorAll('.counter-card');

cards.forEach((card) => {
    let startValue = 0;
    let endValue = parseInt(card.getAttribute('counter-end'));
    let unit = card.getAttribute('counter-unit');
    let duration = Math.floor(3000 / endValue);
        let counter = setInterval(() => {
            startValue += 10;
            card.textContent = startValue + unit;
            if(startValue == endValue){
                clearInterval(counter)
            }
        }, duration);
})


//courses

let leftArrow = document.getElementById('left');
let rightArrow = document.getElementById('right');
let courses = document.querySelector('.courses-cards');

let coursesArray = [
    '<div class="course-card">    <div class="card-title" id="card1"> UI & UX Design<br> Training</div>    <div class="card-discription">        <p>John Jonson </p>        <p>participants : <span>1000+</span></p>        <p>duration : <span>3 months</span></p>        <p>5.5 star</p>    </div>    <div class="card-button">        <button class="button attend ">attend </button>        <button class="button ">details </button>    </div> </div>'
    , '<div class="course-card">  <div class="card-title" id="card2"> Python Essential<br> Training</div>     <div class="card-discription">         <p>rose williams </p>         <p>participants : <span>5000+</span></p>         <p>duration : <span>5 months</span></p>         <p>4.5 star</p>     </div>     <div class="card-button">         <button class="button attend ">attend </button>         <button class="button ">details </button>     </div> </div>'
    ,'<div class="course-card">     <div class="card-title" id="card3"> bussiness Tips<br> Training</div>     <div class="card-discription">         <p>geffry mercel </p>         <p>participants : <span>10000+</span></p>         <p>duration : <span>2 months</span></p>         <p>7 star</p>     </div>     <div class="card-button">         <button class="button attend ">attend </button>         <button class="button ">details </button>     </div> </div>'
]

function setCards() {
    if(window.innerWidth >= 700) {
        let latcourse = coursesArray.slice(0,3);
        courses.innerHTML = latcourse
    }else if(window.innerWidth <= 480){
        let latcourse = coursesArray.slice(0,1);
        courses.innerHTML = latcourse
    } else {
        let latcourse = coursesArray.slice(0,2);
        courses.innerHTML = latcourse
    }

}

window.onresize = () => {
    setCards()
}
setCards()
leftArrow.onclick = ()=> {
    let firstelement = coursesArray[0];
    coursesArray.shift()
    coursesArray.push(firstelement)
    setCards()
}
rightArrow.onclick = ()=> {
    let lastelemnt = coursesArray[`${coursesArray.length - 1}`];
    coursesArray.pop()
    coursesArray.unshift(lastelemnt)
    setCards()
}


