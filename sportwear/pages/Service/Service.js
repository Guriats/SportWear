import "./Service.css";

const template = () => {
  return `
  <h2>SERVICE</h2>
  <p>Contenido Servicios</p>
  `;
};

const Service = () => {
  document.querySelector("main").innerHTML = template();
};

export default Service;