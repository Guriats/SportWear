import "./Home.css";

const template = () => {
  return `
  <h2>HOME</h2>
  <p>Contenido Home</p>
  `;
};

const Home = () => {
  document.querySelector("main").innerHTML = template();
};

export default Home;