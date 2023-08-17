import "./Gallery.css";
import {camisetas} from "../../data/data";

const template = () => {
  return `
<div id="caja-texto">
  <h2 const="altura">GALLERY</h2>
  <p>Contenido Galería</p>
</div>
  
  <ul id="camisetas-container"></ul>
  
  `;
};

// Función imprimir camisetas

const printCamisetas = () => {
  const camisetasContainer = document.querySelector("#camisetas-container");
  for (const camiseta of camisetas) {
    const li = document.createElement("li");
    li.innerHTML = `
    <img src='${camiseta.foto}' alt='${camiseta.nombre}' />
    `;
    camisetasContainer.appendChild(li);
  }
};



const Gallery = () => {
  document.querySelector("main").innerHTML = template();
  printCamisetas();
};

export default Gallery;

