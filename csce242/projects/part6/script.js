// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');

  burger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
});


// MODEL DETAILS LOADING
document.addEventListener("DOMContentLoaded", () => {
  const modelDetail = document.getElementById("model-detail");
  const similarModels = document.getElementById("similar-models");
  if (!modelDetail) return; // Only run on model.html

  const params = new URLSearchParams(window.location.search);
  const modelId = parseInt(params.get("id"));
  const jsonUrl = "trucks.json";

  fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
      const truck = data.find(t => t._id === modelId);

      if (!truck) {
        modelDetail.innerHTML = "<p>Model not found.</p>";
        similarModels.innerHTML = "";
        return;
      }

      // Fill in truck details
      modelDetail.innerHTML = `
        <a href="models.html" class="btn">← Back to Models</a>
        <h1>${truck.name}</h1>
        <div class="grid-2">
          <div><img src="${truck.img}" alt="${truck.name}"></div>
          <div class="card">
            <h3>Key Specs</h3>
            <table>
              <tr><th>Engine</th><td>${truck.engine}</td></tr>
              <tr><th>Drive</th><td>${truck.drive}</td></tr>
              <tr><th>Transmission</th><td>${truck.transmission}</td></tr>
              <tr><th>Year</th><td>${truck.year}</td></tr>
            </table>
            <p>${truck.description}</p>
          </div>
        </div>
      `;


      const others = data.filter(t => t._id !== modelId).slice(0, 3);
      similarModels.innerHTML = others.map(o => `
        <article class="card">
          <img src="${o.img}" alt="${o.name}">
          <strong>${o.name}</strong>
          <p class="meta">${o.engine} • ${o.drive}</p>
          <a class="btn" href="model.html?id=${o._id}">View</a>
        </article>
      `).join("");
    })
    .catch(error => {
      console.error("Error loading model:", error);
      modelDetail.innerHTML = "<p>Failed to load model data.</p>";
    });
});
