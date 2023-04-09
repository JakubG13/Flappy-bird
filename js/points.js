let points = 0;
let flag = true;

const checkPoints = () => {
  let obstX = Math.floor(
    document.querySelector(".obstacle__one").getBoundingClientRect().x
  );
  let birdX = Math.floor(bird.getBoundingClientRect().x);
  //   console.log(birdX, obstX);

  if (birdX >= obstX && birdX <= obstX + 5 && flag === true) {
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

const checkPointsTimeout = () => {
  setInterval(checkPoints, 1);
};

setTimeout(checkPointsTimeout, 2000);
