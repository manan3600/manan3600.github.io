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
// ---------------------------
// CONTACT FORM (Web3Forms)
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const statusEl = document.getElementById("formStatus");
  const submitBtn = document.getElementById("contactSubmit");


  const WEB3FORMS_KEY = "6fd39dac-ffc7-4ac7-a50f-f69fb0d1ea9f";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

 
    if (!form.reportValidity()) return;

 
    const botField = form.querySelector('[name="botcheck"]');
    if (botField && botField.value) return;


    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_KEY);

   
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";
    statusEl.textContent = "";
    statusEl.className = "form-status";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await res.json();

      if (data.success) {
        statusEl.textContent = "✅ Message sent! We’ll get back to you soon.";
        statusEl.classList.add("success");
        form.reset();
      } else {
        statusEl.textContent = "❌ Something went wrong. Please try again.";
        statusEl.classList.add("error");
      }
    } catch (err) {
      statusEl.textContent = "❌ Network error. Please try again later.";
      statusEl.classList.add("error");
      console.error(err);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  });
});
