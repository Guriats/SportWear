import "./About.css";

const template = () => {
  return `
  <h2>Acerca de nosotros</h2>
  <p>Conocenos</p>
  `;
};

const About = () => {
  document.querySelector("main").innerHTML = template();
};

export default About;