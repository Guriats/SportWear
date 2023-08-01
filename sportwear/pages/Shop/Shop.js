
import "./Shop.css";

const template = () => {
  return `
  <h2>SHOP</h2>
  <p>Contenido Tienda</p>
  `;
};

const Shop = () => {
  document.querySelector("main").innerHTML = template();
};

export default Shop;