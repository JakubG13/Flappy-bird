class Obstacle {
  constructor() {}
  // metody
  createObstacles() {
    let obstacleOne = document.createElement("div");
    obstacleOne.classList.add("obstacle__one");
    let obstacleOneHeight = Math.floor(Math.random() * 60);
    obstacleOne.style.height = obstacleOneHeight + "%";
    let obstacleTwo = document.createElement("div");
    obstacleTwo.classList.add("obstacle__two");
    obstacleTwo.style.height = 60 - obstacleOneHeight + "%";
    document.body.appendChild(obstacleOne);
    document.body.appendChild(obstacleTwo);
    const removeObstacles = () => {
      document.body.removeChild(obstacleOne);
      document.body.removeChild(obstacleTwo);
    };
    setTimeout(removeObstacles, 2000);
  }
}
