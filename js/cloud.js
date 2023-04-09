class Cloud {
  constructor() {}
  // metody
  createCloud() {
    let cloud = document.createElement("div");
    cloud.classList.add("cloud");
    let cloudHeight = Math.floor(Math.random() * 100 + 175);
    let cloudWidth = Math.floor(Math.random() * 200 + 200);
    let cloudTop = Math.floor(Math.random() * 100);
    // let cloudRight = Math.floor(Math.random() * 100);
    cloud.style.height = cloudHeight + "px";
    cloud.style.width = cloudWidth + "px";
    cloud.style.top = cloudTop + "%";
    // cloud.style.right = cloudRight + "%";
    document.body.appendChild(cloud);
    const removeCloud = () => {
      document.body.removeChild(cloud);
    };
    setTimeout(removeCloud, 3000);
  }
}

const createCloud = () => {
  let cloud = new Cloud();
  cloud.createCloud();
  setTimeout(() => {
    cloud = new Cloud();
    cloud.createCloud();
  }, 300);

  setTimeout(() => {
    cloud = new Cloud();
    cloud.createCloud();
  }, 900);
  setTimeout(() => {
    cloud = new Cloud();
    cloud.createCloud();
  }, 1500);
  setTimeout(() => {
    cloud = new Cloud();
    cloud.createCloud();
  }, 1800);
};

setInterval(createCloud, 3000);
