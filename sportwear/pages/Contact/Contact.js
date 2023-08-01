import "./Contact.css";

const template = () => {
  return `
  <h2>CONTACTO</h2>
  <p>Contenido Contacto</p>
  `;
};

const Contact = () => {
  document.querySelector("main").innerHTML = template();
};

export default Contact;