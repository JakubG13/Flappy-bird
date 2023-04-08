const bird = document.querySelector(".bird");

const birdFall = () => {
  let birdY = bird.getBoundingClientRect().y;
  bird.style.top = birdY + 2 + "px";
};

setInterval(birdFall, 1);
