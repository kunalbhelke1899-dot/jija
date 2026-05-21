/* GSAP ANIMATION */

gsap.from(".title",{

y:-100,
opacity:0,
duration:1.5

});

gsap.from(".poster-box",{

scale:0,
rotation:20,
opacity:0,
duration:2

});

gsap.from(".memory-grid img",{

y:100,
opacity:0,
stagger:0.3,
duration:1.5

});

/* CONFETTI */

document
.getElementById("celebrateBtn")
.addEventListener("click",()=>{

confetti({

particleCount:300,
spread:180

});

});