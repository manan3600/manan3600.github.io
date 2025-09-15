// Sunny Times
const sunnyBox = document.getElementById("sunny");
const sunnyText = document.getElementById("sunny-text");

const lyrics = [
  "Here comes the sun",
  "Sun",
  "Sun",
  "Sun",
  "Here it comes"
];

let lineIndex = 0;

sunnyBox.onclick = () => {
  if (lineIndex < lyrics.length) {
    const p = document.createElement("p");
    p.textContent = lyrics[lineIndex];
    sunnyText.appendChild(p);
    lineIndex++;
  }
};

// Color Picker
const colorPicker = document.getElementById("color-select");
const colorText = document.getElementById("p-select-color");

colorPicker.addEventListener("input", (event) => {
  const pickedColor = event.target.value;
  colorText.style.color = pickedColor;
  colorText.textContent = pickedColor;
});

// Image Change
const weatherImg = document.getElementById("weather-img");
const CLOUDY_IMG = "csce242/assignments/images/cloudy.png";
const SUNNY_IMG = "https://cdn-icons-png.flaticon.com/512/869/869869.png";

weatherImg.onclick = () => {
  weatherImg.src = SUNNY_IMG;
};
