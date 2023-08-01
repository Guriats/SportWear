import "./Header.css";

const template = () => {
    return `    
<nav id='navSecundario'>   

<button id="theme-btn">🌙</button> 

<div id="secundario">
  <ul id='ulSecundario'>

  <li>
  <a href="null">
  <img src="icons/facebook.png" alt="icono de Facebook">
  </a>
  </li>

  <li>
  <a href="null">
  <img src="icons/instagram.png" alt="icono de Instagram">
  </a>
  </li>

  <li>
  <a href="null">
  <img src="icons/pinterest.png" alt="icono de Pinterest">
  </a>
  </li>

  </ul>
 </div>

 <div id='bot'>
 <input type="text" id="my-input" placeholder="buscador..."/>
 <button id="my-btn">Search</button>
 </div>
 </nav>


 


 <nav id='navPrimario'>
    <div id="Segundo">
    <ul id='ulPrimario'>

    <li>
    <a href="#null" id="home-link">Home</a>
    </li>

    <li>
    <a href="#null" id="about-link">About us</a>
    </li>

    <li>
    <a href="#null" id="contact-link">Contact</a>
    </li>

   </div>


   <img src="icons/logo.png" alt="Logo" class='logo'>



   <div id="Primero">
   <ul id='ulPrimario'>

   <li>
   <a href="#null" id="gallery-link">Gallery</a>
   </li>

   <li>
   <a href="#null" id="service-link">Service</a>
   </li>

   <li>
   <a href="#null" id="shop-link">Shop</a>
   </li>

   <li>
   <a href="#null" id="api-link">Api</a>
   </li>
  </div>

   </nav>
    `;
  };



  const Header = () => {
    document.querySelector("header").innerHTML = template();
  };

  export default Header;