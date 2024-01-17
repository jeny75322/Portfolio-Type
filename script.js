// Text Animation 
const text = document.querySelector('.sec-text');

const textLoad = () =>{
    setTimeout(()=>{
        text.textContent = "Coder";
    },0);
    setTimeout(()=>{
        text.textContent = "Web Developer";
    },4000);
    setTimeout(()=>{
        text.textContent = "Youtuber";
    },8000);
};
textLoad();
setInterval(textLoad, 12000);

// Counter 
function animateValue (element, start, end, duration){
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = setInterval (() =>{
        current += increment;
        element.textContent = current;
        if(current===end){
            clearInterval(timer);
        }
    },stepTime);
}

function startCounter(){
    const counterElements = document.querySelectorAll('.counter-value');
    counterElements.forEach((element)=>{
        const target = parseInt (element.getAttribute('data-target'));
        animateValue(element, 0, target, 1500)
    });
}

window.addEventListener('scroll', () => {
    const counterSection = document.querySelector('.counter');
    const counterSectionTop = counterSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (counterSectionTop < windowHeight){
        startCounter();
        window.removeEventListener('scroll',startCounter )
    }

});

//Filter Gallery 
const filterOptions = document.querySelectorAll('.filter-option');
const galleryItems = document.querySelectorAll('.gallery-item');
filterOptions.forEach(option => {
    option.addEventListener('click', () =>{
        filterOptions.forEach(o => o.classList.remove('active'));
        option.classList.add('active');

    const filterCatagory = option.getAttribute('data-filter');
    galleryItems.forEach(item => {
        if (item.classList.contains(filterCatagory) || filterCatagory === 'all') {
            item.style.display = "block";
        } else{
            item.style.display = "none";
        }
    });
    });
});

// Image Show 
const image = document.getElementById('testi');
const overlay = document.querySelector('.overlay-img');

image.addEventListener('click', () =>{
    overlay.classList.toggle('show');
});

// Smooth Scroll JS 
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});


