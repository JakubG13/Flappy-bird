const checkHit = () => {
  //   let obst1 = document.querySelector(".obstacle__one");
  //   let obst2 = document.querySelector(".obstacle__two");
  let birdX = bird.getBoundingClientRect().x;
  let birdY = bird.getBoundingClientRect().y;
  let birdWidth = bird.getBoundingClientRect().width;
  let birdHeight = bird.getBoundingClientRect().height;

  let obst1X = document
    .querySelector(".obstacle__one")
    .getBoundingClientRect().x;
  let obst1Y = document
    .querySelector(".obstacle__one")
    .getBoundingClientRect().y;
  let obst1Width = document
    .querySelector(".obstacle__one")
    .getBoundingClientRect().width;
  let obst1Height = document
    .querySelector(".obstacle__one")
    .getBoundingClientRect().height;

  let obst2X = document
    .querySelector(".obstacle__two")
    .getBoundingClientRect().x;
  let obst2Y = document
    .querySelector(".obstacle__two")
    .getBoundingClientRect().y;
  let obst2Width = document
    .querySelector(".obstacle__two")
    .getBoundingClientRect().width;
  let obst2Height = document
    .querySelector(".obstacle__two")
    .getBoundingClientRect().height;
  if (
    birdX + birdWidth <= obst1X + obst1Width + birdWidth &&
    birdX >= obst1X - birdWidth &&
    birdY + birdHeight <= obst1Y + obst1Height + birdHeight &&
    birdY >= obst1Y - birdHeight
  ) {
    document.querySelector(".endScreen").style.display = "flex";
    bird.style.left = -1000 + "%";
    bird.style.top = 1000 + "%";
    let crashSound = new Audio("audio/clank-car-crash-collision-6206.mp3");
    crashSound.volume = 0.3;
    crashSound.play();
    document.querySelector(".music").volume = "0";
  } else if (
    birdX + birdWidth <= obst2X + obst2Width + birdWidth &&
    birdX >= obst2X - birdWidth &&
    birdY + birdHeight <= obst2Y + obst2Height + birdHeight &&
    birdY >= obst2Y - birdHeight
  ) {
    document.querySelector(".endScreen").style.display = "flex";
    bird.style.left = -1000 + "%";
    bird.style.top = 1000 + "%";
    let crashSound = new Audio("audio/clank-car-crash-collision-6206.mp3");
    crashSound.volume = 0.3;
    crashSound.play();
    document.querySelector(".music").volume = "0";
  }
};

const startChecking = () => {
  setInterval(checkHit, 1);
};

setTimeout(startChecking, 2500);
