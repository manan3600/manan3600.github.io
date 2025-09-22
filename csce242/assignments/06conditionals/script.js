
const toggleBtn = document.getElementById("menu-toggle");
const menuItems = document.getElementById("menu-items");

toggleBtn.onclick = () => {
  menuItems.classList.toggle("hidden");
  toggleBtn.textContent = menuItems.classList.contains("hidden") ? "▼" : "▲";
};


document.querySelectorAll(".menu-item").forEach(item => {
  item.onclick = () => {
    const target = item.dataset.target;
    document.getElementById("planting").classList.add("hidden");
    document.getElementById("clock").classList.add("hidden");
    document.getElementById(target).classList.remove("hidden");

    // hide menu on small screen after click
    if (window.innerWidth <= 768) {
      menuItems.classList.add("hidden");
      toggleBtn.textContent = "▼";
    }
  };
});

// Exercise 1: Planting
const slider = document.getElementById("day-slider");
const plantResult = document.getElementById("plant-result");

const updatePlant = (days) => {
  let message = "";
  let img = "";

  if (days >= 1 && days <= 2) {
    message = "Your plant is healthy and happy";
    img = "images/healthy.png";
  } else if (days >= 3 && days <= 5) {
    message = "Your plant needs watering";
    img = "images/water.png";
  } else if (days >= 6 && days <= 9) {
    message = "Leaves are dropping, water soon!";
    img = "images/wilting.png";
  } else if (days >= 10 && days <= 12) {
    message = "Sorry, your plant is no longer with us";
    img = "images/dead.png";
  }

  plantResult.innerHTML = `
    <img src="${img}" alt="Plant">
    <p>It's been ${days} days since watering your plant</p>
    <p>${message}</p>
  `;
};

slider.addEventListener("input", (e) => updatePlant(e.target.value));
updatePlant(slider.value); // initial

// Exercise 2: Digital Clock
const timeDisplay = document.getElementById("time-display");

const updateClock = () => {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12 || 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  timeDisplay.textContent = `${hours}:${minutes} ${ampm}`;
};

setInterval(updateClock, 1000);
updateClock();
