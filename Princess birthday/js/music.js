/* =========================================
   BACKGROUND MUSIC
========================================= */

const music = new Audio("audio/birthday.mp3");

music.loop = true;

music.volume = 0.5;

/* PLAY BUTTON */

const musicBtn = document.getElementById("musicBtn");

if(musicBtn){

musicBtn.addEventListener("click",()=>{

if(music.paused){

music.play();

musicBtn.innerHTML = "Pause Music ⏸️";

}else{

music.pause();

musicBtn.innerHTML = "Play Music 🎵";

}

});

}

/* AUTO PLAY ON FIRST CLICK */

document.body.addEventListener("click",()=>{

music.play();

},{
once:true
});

/* FLOATING MUSIC ICON */

const icon = document.createElement("div");

icon.classList.add("music-icon");

icon.innerHTML = "🎵";

document.body.appendChild(icon);

/* ICON STYLE */

icon.style.position = "fixed";
icon.style.bottom = "20px";
icon.style.right = "20px";
icon.style.fontSize = "40px";
icon.style.animation = "float 3s infinite";
icon.style.zIndex = "999";