import "./Api.css";

const template = () => {
  return `
  <h2>API</h2>
  <p>Contenido de la Api</p>
  `;
};

const Api = () => {
  document.querySelector("main").innerHTML = template();
};

export default Api;