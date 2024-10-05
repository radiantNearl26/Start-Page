//let currentIndex =
//  localStorage.getItem("currentIndex") ||
//  document.currentScript.getAttribute("currentIndex");
//currentIndex = parseInt(currentIndex);

const images = ["cover1.png", "cover2.jpg", "cover3.jpg", "cover4.jpg"];
const colorSets = [
  {
    "--text-color": "#9fadc6",
    "--hover-color": "#e58484",
    "--accent-color": "#9f4565",
    "--background-color": "#14191a",
  },
  {
    "--text-color": "#9fadc6",
    "--hover-color": "#84e5ad",
    "--accent-color": "#368186",
    "--background-color": "#141717",
  },
  {
    "--text-color": "#9fadc6",
    "--hover-color": "#b086d1",
    "--accent-color": "#9f457e",
    "--background-color": "#171417",
  },
  {
    "--text-color": "#9fadc6",
    "--hover-color": "#84bce5",
    "--accent-color": "#627583",
    "--background-color": "#16171a",
  },
];

let currentIndex = Math.floor(Math.random() * images.length);

function preloadImages() {
  for (let i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = "../src/images/" + images[i];
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  localStorage.setItem("currentIndex", currentIndex); // Update currentIndex in localStorage
  const imageElement = document.getElementById("carouselImage");
  imageElement.style.opacity = 0;
  updateColors(currentIndex);

  setTimeout(() => {
    imageElement.src = "../src/images/" + images[currentIndex];
    imageElement.style.opacity = 1;
  }, 200); // Match the transition duration in style.css
}

function updateColors() {
  const colorSet = colorSets[currentIndex];
  // Iterate through the colorSet and set the CSS variables
  for (const [property, value] of Object.entries(colorSet)) {
    document.documentElement.style.setProperty(property, value);
  }
}

// Set colors with current index first
updateColors(currentIndex);

// Set the initial image
document.getElementById("carouselImage").src =
  "../src/images/" + images[currentIndex];

// Image is opacity 0 and text is translated off screen by default
// Add the loaded class to the image and text to animate them in
window.onload = function () {
  document.getElementById("image").classList.add("loaded");
  document.getElementById("text").classList.add("loaded");
	document.getElementsByTagName("html")[0].classList.add("loaded");
  // Preload the remaining images
  preloadImages();
};
