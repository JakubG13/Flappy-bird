let keys = [];
const findKey = (e) => {
  if (e.key === "w") {
    keys.push(e.key);
  }
  if (keys.length === 1) {
    let jumpSound = new Audio("audio/cartoon-jump-6462.mp3");
    jumpSound.volume = 0.5;
    jumpSound.play();
    let backgroundMusic = document.querySelector(".music");
    backgroundMusic.play();
    document.querySelector(".bird__jump-clouds").style.display = "block";
    setTimeout(() => {
      document.querySelector(".bird__jump-clouds").style.display = "none";
    }, 500);
    document.querySelector(".instruction").style.display = "none";

    const jump = () => {
      let birdY = bird.getBoundingClientRect().y;
      bird.style.top = birdY - 3 + "px";
    };
    let birdY = bird.getBoundingClientRect().y;
    const idInterval = setInterval(jump, 1);
    const end = () => {
      clearInterval(idInterval);
    };
    setTimeout(end, 500);
  }
};

document.addEventListener("keydown", findKey);
document.addEventListener("keyup", (e) => {
  keys = [];
});

// mobile
document.addEventListener("touchstart", () => {
  let jumpSound = new Audio("audio/cartoon-jump-6462.mp3");
  jumpSound.volume = 0.5;
  jumpSound.play();
  let backgroundMusic = document.querySelector(".music");
  backgroundMusic.play();
  document.querySelector(".bird__jump-clouds").style.display = "block";
  setTimeout(() => {
    document.querySelector(".bird__jump-clouds").style.display = "none";
  }, 500);
  document.querySelector(".instruction").style.display = "none";
  const jump = () => {
    let birdY = bird.getBoundingClientRect().y;
    bird.style.top = birdY - 4 + "px";
  };
  let birdY = bird.getBoundingClientRect().y;
  const idInterval = setInterval(jump, 1);
  const end = () => {
    clearInterval(idInterval);
  };
  setTimeout(end, 500);
});
