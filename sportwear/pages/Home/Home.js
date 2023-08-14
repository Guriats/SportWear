import "./Home.css";

const template = () => {
  return `
  <img src="/images/paginas/portada.jpeg" class="background">

  <div class='container'>
 
        <div class="portadaHome">
          <h2>SPORT WEAR</h2>
          <p>Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando un impresor desconocido tomó una galera de tipos y la codificó para hacer un libro de muestras tipográficas. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker, que incluía versiones de Lorem Ipsum.</p>
        </div>

       <div class='containerHome'>
          <button>botón
          </button>
        </div>

  </div>

<div class='wrapper'>
  <div class='collapsible'>
      <input type='checkbox' id='collapsible-head'>
    <label for='collapsible-head'>Colapsando usando sólo Html y css</label>
    <div class='collapsible-text'>
      <h2>Collapsible Heading</h2>
      <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      </p>
    </div>
  </div>
</div>

  `;
};

const Home = () => {
  document.querySelector("main").innerHTML = template();
};


export default Home;