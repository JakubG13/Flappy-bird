const bird = document.querySelector(".bird");
let anotherFlag = true;
const birdFall = () => {
  let birdY = bird.getBoundingClientRect().y;
  bird.style.top = birdY + 2 + "px";
  if ((birdY <= 0 || birdY >= window.innerHeight) && anotherFlag === true) {
    anotherFlag = false;
    document.querySelector(".endScreen").style.display = "flex";
    bird.style.left = -1000 + "%";
  }
};

setInterval(birdFall, 1);
