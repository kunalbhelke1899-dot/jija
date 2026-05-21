/* =========================================
   PREMIUM GALLERY EFFECT
========================================= */

const galleryImages = document.querySelectorAll(".memory-grid img");

/* 3D HOVER EFFECT */

galleryImages.forEach((img)=>{

img.addEventListener("mousemove",(e)=>{

const rect = img.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateY = ((x / rect.width) - 0.5) * 20;
const rotateX = ((y / rect.height) - 0.5) * -20;

img.style.transform = `
perspective(1000px)
rotateY(${rotateY}deg)
rotateX(${rotateX}deg)
scale(1.08)
`;

});

img.addEventListener("mouseleave",()=>{

img.style.transform = `
perspective(1000px)
rotateY(0deg)
rotateX(0deg)
scale(1)
`;

});

});

/* AUTO SLIDER */

let scrollAmount = 0;

function autoSlide(){

const gallery = document.querySelector(".memory-grid");

if(gallery){

scrollAmount += 1;

gallery.scrollTo({
left: scrollAmount,
behavior:"smooth"
});

if(scrollAmount > gallery.scrollWidth - gallery.clientWidth){

scrollAmount = 0;

}

}

}

setInterval(autoSlide,40);

/* IMAGE POPUP */

galleryImages.forEach((img)=>{

img.addEventListener("click",()=>{

const popup = document.createElement("div");

popup.classList.add("popup");

popup.innerHTML = `
<img src="${img.src}">
`;

document.body.appendChild(popup);

popup.addEventListener("click",()=>{

popup.remove();

});

});

});