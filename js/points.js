let points = 0;
let flag = true;

const checkPoints = () => {
  let obstX = Math.floor(
    document.querySelector(".obstacle__one").getBoundingClientRect().x
  );
  let birdX = Math.floor(bird.getBoundingClientRect().x) + 1;

  if (birdX === obstX && flag === true) {
    addPoints();
  }
};
const addPoints = () => {
  flag = false;
  points++;
  document.querySelector(".points").textContent = points;
  setTimeout(() => {
    flag = true;
  }, 1000);
};
