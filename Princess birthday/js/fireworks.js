/* =========================================
   FIREWORKS EFFECT
========================================= */

function launchFireworks(){

confetti({

particleCount:400,
spread:200,
origin:{ y:0.6 }

});

}

/* AUTO FIREWORKS */

setInterval(()=>{

launchFireworks();

},8000);

/* BUTTON FIREWORKS */

const celebrateBtn = document.getElementById("celebrateBtn");

if(celebrateBtn){

celebrateBtn.addEventListener("click",()=>{

launchFireworks();

});

}

/* MULTI BURST */

function burst(){

confetti({
particleCount:100,
angle:60,
spread:80,
origin:{x:0}
});

confetti({
particleCount:100,
angle:120,
spread:80,
origin:{x:1}
});

}

setInterval(burst,5000);