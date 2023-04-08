let keys = [];
const findKey = (e) => {
  if (e.key === "w") {
    keys.push(e.key);
  }
  if (keys.length === 1) {
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
  }
  //   console.log(keys);
};

document.addEventListener("keydown", findKey);
document.addEventListener("keyup", (e) => {
  //   let index = keys.indexOf(e.key);
  //   keys.splice(index, 1);
  keys = [];
});

// document.addEventListener("keypress", () => {
//   keys = [];
// });

// mobile
document.addEventListener("touchstart", () => {
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
