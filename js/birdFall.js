const bird = document.querySelector(".bird");

const birdFall = () => {
  let birdY = bird.getBoundingClientRect().y;
  bird.style.top = birdY + 2 + "px";
  if (birdY <= 0 || birdY >= window.innerHeight) {
    document.querySelector(".endScreen").style.display = "flex";
  }
};

setInterval(birdFall, 1);
