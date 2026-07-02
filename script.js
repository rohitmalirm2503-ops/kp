 /* =========================
   LOADER
========================= */


/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});

/* =========================
   CURSOR SCALE
========================= */

const links = document.querySelectorAll(
"a, button, .service-card"
);

links.forEach(item => {

item.addEventListener("mouseenter", () => {

cursor.style.width = "50px";
cursor.style.height = "50px";

});

item.addEventListener("mouseleave", () => {

cursor.style.width = "20px";
cursor.style.height = "20px";

});

});

/* =========================
   FLOATING CARDS
========================= */

const cards = document.querySelectorAll(".floating-card");

cards.forEach((card,index)=>{

let speed = (index + 1) * 0.2;

window.addEventListener("mousemove",(e)=>{

let x = (window.innerWidth/2 - e.clientX) * speed * 0.03;
let y = (window.innerHeight/2 - e.clientY) * speed * 0.03;

card.style.transform =
`translate(${x}px,${y}px)`;

});

});

/* =========================
   SPHERE PARALLAX
========================= */

const sphere = document.querySelector(".sphere");

window.addEventListener("mousemove",(e)=>{

let x =
(window.innerWidth / 2 - e.clientX) * 0.02;

let y =
(window.innerHeight / 2 - e.clientY) * 0.02;

sphere.style.transform =
`translate(${x}px,${y}px)`;

});

/* =========================
   REVEAL ANIMATION
========================= */

const revealElements =
document.querySelectorAll(
".section-title,.about-left,.about-right,.service-card"
);

const revealObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0px)";

}

});

},{
threshold:0.15
});

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform=
"translateY(60px)";

el.style.transition=
"all 1s ease";

revealObserver.observe(el);

});

/* =========================
   COUNTER ANIMATION
========================= */

const counters =
document.querySelectorAll(".hero-stats h2");

const counterObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

let counter = entry.target;

let text =
counter.innerText;

let number =
parseInt(text.replace(/\D/g,''));

let current = 0;

let increment =
number / 60;

let interval = setInterval(()=>{

current += increment;

if(current >= number){

current = number;

clearInterval(interval);

}

if(text.includes("+")){

counter.innerText =
Math.floor(current) + "+";

}

else if(text.includes("%")){

counter.innerText =
Math.floor(current) + "%";

}

else if(text.includes("360")){

counter.innerText =
Math.floor(current) + "°";

}

},20);

counterObserver.unobserve(counter);

}

});

},{
threshold:0.5
});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

navbar.style.background =
"rgba(0,0,0,.8)";

navbar.style.boxShadow =
"0 10px 40px rgba(0,0,0,.4)";

}
else{

navbar.style.background =
"rgba(0,0,0,.35)";

navbar.style.boxShadow =
"none";

}

});

/* =========================
   SERVICE HOVER TILT
========================= */

const serviceCards =
document.querySelectorAll(".service-card");

serviceCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateX =
((y / rect.height)-0.5)*15;

const rotateY =
((x / rect.width)-0.5)*-15;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0)";

});

});

/* =========================
   SMOOTH SCROLL LINKS
========================= */

document.querySelectorAll("a").forEach(anchor=>{

anchor.addEventListener("click",(e)=>{

const href =
anchor.getAttribute("href");

if(
href &&
href.startsWith("#")
){

e.preventDefault();

document.querySelector(href)
?.scrollIntoView({
behavior:"smooth"
});

}

});

});

/* =========================
   GOLD PARTICLES
========================= */

// const particleContainer =
// document.createElement("div");

// particleContainer.style.position="fixed";
// particleContainer.style.top="0";
// particleContainer.style.left="0";
// particleContainer.style.width="100%";
// particleContainer.style.height="100%";
// particleContainer.style.pointerEvents="none";
// particleContainer.style.zIndex="-1";

// document.body.appendChild(
// particleContainer
// );

// for(let i=0;i<40;i++){

// const particle =
// document.createElement("span");

// particle.style.position="absolute";

// particle.style.width="3px";
// particle.style.height="3px";

// particle.style.background="#d4af37";

// particle.style.borderRadius="50%";

// particle.style.left=
// Math.random()*100+"%";

// particle.style.top=
// Math.random()*100+"%";

// particle.style.opacity=".4";

// particle.style.animation=
// `floatParticle ${5+Math.random()*10}s linear infinite`;

// particleContainer.appendChild(
// particle
// );

// }

/* =========================
   PARTICLE STYLE
========================= */

const style =
document.createElement("style");

style.innerHTML=`

@keyframes floatParticle{

0%{
transform:translateY(0);
opacity:0;
}

50%{
opacity:.6;
}

100%{
transform:translateY(-300px);
opacity:0;
}

}

`;

document.head.appendChild(style);


// video 
/* =========================
   VIDEO SHOWCASE
========================= */

const track = document.querySelector(".video-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const videos = document.querySelectorAll(".video-card video");

// Right Button
nextBtn.addEventListener("click", () => {
    track.scrollBy({
        left: 380,
        behavior: "smooth"
    });
});

// Left Button
prevBtn.addEventListener("click", () => {
    track.scrollBy({
        left: -380,
        behavior: "smooth"
    });
});

// Hover Play / Pause
videos.forEach(video => {

    video.addEventListener("mouseenter", () => {

        videos.forEach(v => {
            if(v !== video){
                v.pause();
                v.currentTime = 0;
            }
        });

        video.play();

    });

    video.addEventListener("mouseleave", () => {

        video.pause();
        video.currentTime = 0;

    });

});

// Click = Fullscreen
videos.forEach(video => {

    video.addEventListener("click", () => {

        if(video.requestFullscreen){
            video.requestFullscreen();
        }
        else if(video.webkitRequestFullscreen){
            video.webkitRequestFullscreen();
        }

    });

});

// Auto Slider
let autoSlide = setInterval(() => {

    if(track.scrollLeft + track.clientWidth >= track.scrollWidth-5){

        track.scrollTo({
            left:0,
            behavior:"smooth"
        });

    }else{

        track.scrollBy({
            left:380,
            behavior:"smooth"
        });

    }

},3500);

// Hover Slider Stop
track.addEventListener("mouseenter",()=>{

    clearInterval(autoSlide);

});

track.addEventListener("mouseleave",()=>{

    autoSlide = setInterval(()=>{

        if(track.scrollLeft + track.clientWidth >= track.scrollWidth-5){

            track.scrollTo({
                left:0,
                behavior:"smooth"
            });

        }else{

            track.scrollBy({
                left:380,
                behavior:"smooth"
            });

        }

    },3500);

});

document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".slider-container");
    const next = document.querySelector(".team-next");
    const prev = document.querySelector(".team-prev");

    next.addEventListener("click", () => {
        container.scrollBy({
            left: 300,
            behavior: "smooth"
        });
    });

    prev.addEventListener("click", () => {
        container.scrollBy({
            left: -300,
            behavior: "smooth"
        });
    });

});

// ================== EmailJS ==================

emailjs.init({
    publicKey: "EW2on-bn8B4cACqME"
});

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_m7hqy2l",
            "template_klmrzto",
            this
        ).then(function () {

            alert("✅ Thank You! Your enquiry has been sent successfully.");

            contactForm.reset();

        }).catch(function (error) {

            console.error(error);

            alert("❌ Failed to send enquiry.");

        });

    });
}

const gap = 15;
const cardWidth = cards[0].offsetWidth + gap;