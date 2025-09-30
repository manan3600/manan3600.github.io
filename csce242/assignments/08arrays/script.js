// Associative arrays
const beforeAdoption = {
  "Milly": "images/before1.png",
  "Chamber": "images/before2.webp",
  "Anka": "images/before3.webp",
  "Monkey": "images/before4.webp"
};

const afterAdoption = {
  "Milly": "images/after1.png",
  "Chamber": "images/after2.webp",
  "Anka": "images/after3.webp",
  "Monkey": "images/after4.webp"
};

const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.getElementById("close");

// Load before adoption images
for (let dog in beforeAdoption) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = beforeAdoption[dog];
  img.alt = dog;

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  overlay.innerText = `Please adopt ${dog}`;

  // Click event → show popup
  card.addEventListener("click", () => {
    popupTitle.innerText = `${dog} after adoption`;
    popupImg.src = afterAdoption[dog];
    popup.classList.remove("hidden");
  });

  card.appendChild(img);
  card.appendChild(overlay);
  gallery.appendChild(card);
}

// Close popup
closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});
