const bird = document.querySelector(".bird");
let anotherFlag = true;
const birdFall = () => {
  let birdY = bird.getBoundingClientRect().y;
  bird.style.top = birdY + 1.5 + "px";
  if ((birdY <= 0 || birdY >= window.innerHeight) && anotherFlag === true) {
    anotherFlag = false;
    document.querySelector(".endScreen").style.display = "flex";
    bird.style.left = -1000 + "%";
    bird.style.top = 1000 + "%";
    let crashSound = new Audio("audio/clank-car-crash-collision-6206.mp3");
    crashSound.volume = 0.3;
    crashSound.play();
    document.querySelector(".music").volume = "0";
  }
};

setInterval(birdFall, 1);
