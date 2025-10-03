class Painting {
  constructor(name, artist, image, framed) {
    this.name = name;
    this.artist = artist;
    this.image = image;
    this.framed = framed;
  }

  getSection() {
    return `
      <div class="painting">
        <img src="${this.image}" alt="${this.name}" onclick="openModal('${this.name}')">
        <h3>${this.name}</h3>
      </div>
    `;
  }
}


const paintings = [
  new Painting("The Bee", "GOOGLO", "images/bee.jpg", true),
  new Painting("Dream love kitten", "GOOGLY", "images/kitten.jpg", false),
  new Painting("Flowers and Butterflies", "GOOGLE", "images/flowers.jpg", false),
  new Painting("Forest Animals", "ELGOOG", "images/forest.jpg", true),
  new Painting("Abstract Colors", "CLIPART", "images/abstract.jpg", false)
];


const gallery = document.getElementById("gallery");
paintings.forEach(painting => {
  gallery.innerHTML += painting.getSection();
});

function openModal(name) {
  const p = paintings.find(p => p.name === name);
  document.getElementById("modal-title").innerText = p.name;
  document.getElementById("modal-artist").innerText = "by " + p.artist;

  let imgTag = `<img src="${p.image}" alt="${p.name}">`;
  if (p.framed) imgTag = `<div class="frame">${imgTag}</div>`;

  document.getElementById("modal-img").innerHTML = imgTag;
  document.getElementById("modal").style.display = 'block';
}


function closeModal() {
  document.getElementById("modal").style.display = 'none';
}


window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
