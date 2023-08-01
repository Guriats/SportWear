import "./Gallery.css";

const template = () => {
  return `
  <h2>GALLERY</h2>
  <p>Contenido Galería</p>
  `;
};

const Gallery = () => {
  document.querySelector("main").innerHTML = template();
};

export default Gallery;