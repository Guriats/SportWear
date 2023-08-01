import './style.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';

Header ();
Footer ();



//Vamos a añadirle un evento al botón del tema
/*document.querySelector("#theme-btn").addEventListener("click", () => {
    //Vamos a recuperar el botón
    const btn = document.querySelector("#theme-btn");
    //Cambiamos el tema del body
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      //Si el body tiene la clase dark:
      localStorage.setItem("theme", "dark");
      btn.innerHTML = "☼";
    } else {
      localStorage.removeItem("theme");
      btn.innerHTML = "☾";
    }
  });
  
  //Vamos a definir como arranca el botón del tema al arrancar la aplicación y el tema que tiene que tener
  if (localStorage.getItem("theme")) {
    //Si hay algo en localStorage entonces ponemos el tema oscuro y el sol en el botón
    document.querySelector("#theme-btn").innerHTML = "☼";
    document.body.classList.add("dark");
  }*/

  //Recuperamos el botón
const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", () => {
  //Cada vez que hacemos click alternamos la clase dark, si no la tiene el body la pone y si la tiene la quita
  document.body.classList.toggle("dark");
  //Y además, comprobaremos que si contiene la clase dark que sustituya el texto por un sol y si no por una luna
  if (document.body.classList.contains("dark")) {
    themeBtn.innerHTML = "🌞";
  } else {
    themeBtn.innerHTML = "🌙";
  }
});