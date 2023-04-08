const bird = document.querySelector(".bird");

const birdFall = () => {
  let birdY = bird.getBoundingClientRect().y;
  bird.style.top = birdY + 2 + "px";
  if (birdY <= 0 || birdY >= window.innerHeight) {
    console.log("lose");
  }
};

setInterval(birdFall, 1);
