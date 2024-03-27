//Index page: color change clicker second section

let colorHeading = document.getElementById("projects");

function getRandomColor() {
  let randomColor = Math.floor(Math.random() * 256);
  return randomColor;
}

function showColors(event) {
  let newColor =
    "rgb(" +
    getRandomColor() +
    "," +
    getRandomColor() +
    "," +
    getRandomColor() +
    ")";
  event.target.style.color = newColor;
}

colorHeading.addEventListener("click", showColors);

//palm image manipulation

let palmImage = document.getElementById("palm-image");

function showRandomTransformation() {
  let newSize = "";
  let newOrientation = "";
  let x = Math.floor(Math.random() * 7);
  switch (x) {
    case 0:
      newSize = "100px";
      newOrientation = "rotate(120deg)";
      break;
    case 1:
      newSize = "200px";
      newOrientation = "rotate(90deg)";
      break;
    case 2:
      newSize = "250px";
      newOrientation = "rotate(20deg)";
      break;
    case 3:
      newSize = "150px";
      newOrientation = "rotate(180deg)";
      break;
    case 4:
      newSize = "50px";
      newOrientation = "rotate(300deg)";
      break;
    case 5:
      newSize = "150px";
      newOrientation = "rotate(270deg)";
      break;
    case 6:
      newSize = "200px";
      newOrientation = "rotate(0deg)";
      break;
  }
  palmImage.style.width = newSize;
  palmImage.style.transform = newOrientation;
}

palmImage.addEventListener("click", showRandomTransformation);
