document.getElementById("drawBtn").addEventListener("click", drawScene);

function drawScene() {
  const cloudsContainer = document.getElementById("clouds");
  const treesContainer = document.getElementById("trees");
  const celestialContainer = document.getElementById("celestial");

  // Clear old scene
  cloudsContainer.innerHTML = "";
  treesContainer.innerHTML = "";
  celestialContainer.innerHTML = "";

  // Clouds
  for (let i = 0; i < 6; i++) {
    const cloud = document.createElement("div");
    cloud.classList.add("cloud");
    const puff = document.createElement("div");
    puff.classList.add("puff");
    cloud.appendChild(puff);
    cloudsContainer.appendChild(cloud);
  }

  // Trees
  for (let i = 0; i < 6; i++) {
    const tree = document.createElement("div");
    tree.classList.add("tree");

    const crown = document.createElement("div");
    crown.classList.add("crown");
    const trunk = document.createElement("div");
    trunk.classList.add("trunk");

    tree.appendChild(crown);
    tree.appendChild(trunk);

    treesContainer.appendChild(tree);
  }

  // Day/Night logic
  const hour = new Date().getHours();
  document.body.classList.remove("day", "night");

  if (hour >= 18 || hour < 6) {
    // Night
    document.body.classList.add("night");
    const moon = document.createElement("div");
    moon.classList.add("moon");
    celestialContainer.appendChild(moon);
  } else {
    // Day
    document.body.classList.add("day");
    const sun = document.createElement("div");
    sun.classList.add("sun");
    celestialContainer.appendChild(sun);
  }
}
