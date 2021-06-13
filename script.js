//Animation on scroll
AOS.init({
  duration:2000,
  once:true,
});



//Background music
const audio = document.querySelector("audio");
let volbtn = document.querySelector(".vol-btn");
let volicon = document.querySelector("#icon") ;

volbtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
    volicon.innerHTML = '<i class="fas fa-volume-up"></i>';
    
  } else {
    audio.pause();
    volicon.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
});
