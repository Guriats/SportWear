
import "./Shop.css";
import {camisetas} from "../../data/data";

const template = () => {
  return `
  <h2>SHOP</h2>
  <p>Contenido Tienda</p>
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
    <h3>${camiseta.nombre} - ${camiseta.composicion} - ${camiseta.gramaje}</h3>
    <h2>${camiseta.precio}</h4>
    `;
    camisetasContainer.appendChild(li);
  }
};


const Shop = () => {
  document.querySelector("main").innerHTML = template();
  printCamisetas();
};

export default Shop;