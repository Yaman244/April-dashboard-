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
    '<div class="course-card ">    <div class="card-title " id="card1"> UI & UX Design<br> Training</div>    <div class="card-discription">        <p>John Jonson </p>        <p>participants :<br> <span>1000+</span></p>        <p>duration :<br> <span>3 months</span></p>        <p >5.5 star</p>    </div>    <div class="card-button">        <button class="button attend ">attend </button>        <button class="button ">details </button>    </div> </div>'
    , '<div class="course-card ">  <div class="card-title" id="card2"> Python Essential<br> Training</div>     <div class="card-discription">         <p>rose williams </p>         <p>participants :<br> <span>5000+</span></p>         <p>duration :<br> <span>5 months</span></p>         <p>4.5 star</p>     </div>     <div class="card-button">         <button class="button attend ">attend </button>         <button class="button ">details </button>     </div> </div>'
    , '<div class="course-card ">  <div class="card-title" id="card3"> Python Essential<br> Training</div>     <div class="card-discription">         <p>rose williams </p>         <p>participants :<br> <span>5000+</span></p>         <p>duration :<br> <span>5 months</span></p>         <p>4.5 star</p>     </div>     <div class="card-button">         <button class="button attend ">attend </button>         <button class="button ">details </button>     </div> </div>'
    ,'<div class="course-card">     <div class="card-title" id="card4"> bussiness Tips<br> Training</div>     <div class="card-discription">         <p>geffry mercel </p>         <p>participants :<br> <span>10000+</span></p>         <p>duration :<br> <span>2 months</span></p>         <p>7 star</p>     </div>     <div class="card-button">         <button class="button attend ">attend </button>         <button class="button ">details </button>     </div> </div>'
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
    coursesArray.shift();//remove from beginning
    coursesArray.push(firstelement);
    setCards();
}

rightArrow.onclick = ()=> {
    let lastelemnt = coursesArray[`${coursesArray.length - 1}`];
    coursesArray.pop();
    coursesArray.unshift(lastelemnt);
    setCards();
};

//-------------------------

const options = {
    series: [{
        data: [
            {
            x: 'web development',
            y: 6653,
            fillColor: '#311a53',
            }, {
            x: 'ui/ux design',
            y: 8133,
            fillColor: '#b6a509',
            strokeColor: '#333'
            }, {
            x: 'dusiness',
            y: 7132,
            fillColor : '#311a53',
            },{
                x: 'python',
                y: 7132,
                fillColor : '#b6a509',
            }, {
                x: 'IT and software',
                y: 7132,
                fillColor : '#311a53',
            }
        ] 
    }],
    chart: {
        type: 'bar',
        height: 350,
        fillColor: '#333'
    },
    plotOptions: {
        bar: {
        borderRadius: 4,
        horizontal: true,
        }
    },
    dataLabels: {
        enabled: false
    },

};

if(window.innerWidth <= 767){
    options.plotOptions.bar.horizontal =false
}else{
    options.plotOptions.bar.horizontal =true

}
window.onresize = () => {
    if(window.innerWidth <= 767){
        options.plotOptions.bar.horizontal =false
    }else {
        options.plotOptions.bar.horizontal =true;

    }
}
const chart = new ApexCharts(document.getElementById('chart'), options);

chart.render();



/*<div class="gallery-text">
                    <p class="name">alen plex </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic aspernatur expedita rem voluptates dolorem nihil esse ipsam nobis repudiandae, illum distinctio a vitae tempora, architecto iure! Error, nulla facilis.</p>
                </div>
let galleryData = [
    {
        comment: 'lorem ',
    },
    {
        comment: 'lorem 2',
    }
]
let gelleryText =document.querySelector('.gallery-text .comment');
let galleryLeft = document.getElementById('gallery-left');
let galleryRight = document.getElementById('gallery-right');

galleryLeft.onclick = ()=> {
    let first = galleryData[0];
    gelleryText.innerHTML =  first
}*/