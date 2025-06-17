// Utilicé la librería daisyUI para botones

export default function Home() {

  const info = () =>{
    alert('No hay información todavía ');
  }

  return (
    
   <div className="bg-white">
      <div className="fixed navbar bg-blue-500 shadow-sm z-1">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-xl dropdown-content bg-blue-500 border-white border-1 rounded-box z-1 mt-5 w-80 p-2 h-80 shadow">
              <li><a>PREINSCRIPCIÓN 25/26</a></li>
              <li><a>Ciclos medios</a></li>
              <li><a>Ciclos superiores</a></li>
              <li><a>Másteres</a></li>
              <li><a>Profesorado</a></li>
              <li><a>Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-end">

          <button className="btn btn-info">
            AULA VIRTUAL
          </button>

        </div>
      </div>

      <div id="header" className="pt-10 h-250 bg-[url('../pages/images/fondo.jpg')]">

        <div className="titulo"></div>

        <h1 className="text-5xl text-center mt-15 text-white">
          <p>Domina DAM y DAW con Ciclos Superiores y Másteres</p>
          <p className="mt-3">100% Orientados al Empleo</p>
        </h1>

        <h2 className="text-3xl text-center mt-15 text-white">
          <p>Titulación oficial + prácticas en empresas tech + profesores expertos</p>
          <p className="text-4xl mt-3">¡Conviértete en desarrollador y empieza a trabajar antes de terminar!</p>
        </h2>



        <div className="flex gap-5 justify-center mt-20">
          <button onClick={info} className="bg-blue-100 rounded-md w-60 h-20 text-xl text-blue-500 border-blue-500 border-2 hover:bg-white hover:text-blue-500 hover:scale-110">Solicitar información</button>
          <button className="bg-blue-500 rounded-md w-60 h-20 text-xl skeleton hover:bg-blue-700 hover:scale-110">Preinscripción 25/26</button>
        </div>
      </div>
      

      <div className="flex justify-evenly w-400 mt-15 mx-auto h-130 items-center bg-blue-500 rounded-xl">

        <div class="cursos">
          <p className="text-black text-xl">Certificados Profesionales</p>
          <p className="text-black text-2xl m-10">CURSO AVANZADO DE REACT</p>
          <button class="btn btn-primary hover:bg-white hover:text-blue-800">SOLICITAR PLAZA</button>
        </div>

        <div class="cursos">
          <p className="text-black text-xl">Certificados Profesionales</p>
          <p className="text-black text-2xl m-10">CURSO AVANZADO DE ANGULAR</p>
          <button class="btn btn-secondary hover:bg-white hover:text-rose-600">SOLICITAR PLAZA</button>
        </div>

        <div class="cursos">
          <p className="text-black text-xl">Certificados Profesionales</p>
          <p className="text-black text-2xl m-10">CURSO AVANZADO DE EXCEL</p>
          <button class="btn text-white btn-accent hover:bg-white hover:text-emerald-400">SOLICITAR PLAZA</button>
        </div>

      </div>


      <div className="h-100 mt-30 text-center bg-white text-blue-500">

        <div className="text-3xl mb-10">
          <p>LOS MEJORES PROGRAMADORES SE FORMARON EN ESTE CENTRO</p>
        </div>

        <div className="flex gap-5 justify-evenly">
          <img className="imgChiqui"></img>
          <img className="imgLinus"></img>
          <img className="imgRecio"></img>
          <img className="imgEvil"></img>
          <img className="imgGabe"></img>
        </div>
      

      </div>

      <div id="contacta" className=" w-210 mx-auto h-170 content-center bg-blue-500 rounded-xl">

        <p className="text-white text-4xl text-center"><b>CONTACTO</b></p>
        
        <select className="bg-white w-200 m-5 border-blue text-orange-400 select select-info">
          <option disabled={true}>MOTIVO</option>
          <option>Consulta sobre ciclo medio</option>
          <option>Consulta sobre ciclo superior</option>
          <option>Consulta sobre ciclo máster</option>
          <option>Otra consulta</option>
        </select>

        <div className="flex justify-center">
          <input placeholder="NOMBRE" className="bg-white text-left p-5 text-orange-400 text-l border-1 border-blue-300 rounded-md w-200"></input>
        </div>
        
        <div className="flex justify-center">
          <input placeholder="EMAIL" className="bg-white text-left p-5 text-orange-400 text-l border-1 border-blue-300 rounded-md w-200 mt-5"></input>
        </div>

        <div className="flex justify-center">
          <input placeholder="TELÉFONO" className="bg-white text-left p-5 text-orange-400 text-l border-1 border-blue-300 rounded-md w-200 mt-5"></input>
        </div>

        <div className="flex justify-center">
          <input placeholder="MENSAJE" className="bg-white text-left p-5 text-orange-400 text-l border-1 border-blue-300 rounded-md w-200 h-40 mt-5"></input>
        </div>

        <div className="flex justify-center">
          <button type="button" class="btn text-base-content btn-warning mt-5 hover:bg-white hover:text-warning">ENVIAR</button>
        </div>

      </div>

      <div className="h-100 mt-20 content-center text-center bg-blue-500 rounded-3xl m-5">

        <div className="flex justify-evenly text-black items-center">
          <div className="card bg-white w-70 shadow-sm pt-5 hover:scale-105">
            <figure>
              <img className="robertoANHQV"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center ">Ruberto Astro</h2>
              <p><b>Marcas</b>, <b>Entornos</b> y <b>Sistemas</b>.</p>
              <div className="card-actions justify-center">
              </div>
            </div>
          </div>

          <div className="card bg-white w-70 shadow-sm pt-5 hover:scale-105">
            <figure>
              <img className="emilio"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Arturo Vázquez</h2>
              <p><b>Programación</b></p>
            </div>
          </div>

          <div>
            <h1 className="text-3xl mb-8 text-white">PROFESORADO</h1>
          </div>

          <div className="card bg-white w-70 shadow-sm pt-5 hover:scale-105">
            <figure>
              <img className="isabel"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Tessa Garrido</h2>
              <p><b>Base de datos</b></p>
            </div>
          </div>

          <div className="card bg-white w-70 shadow-sm pt-5 hover:scale-105">
            <figure>
              <img className="juanCuesta"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Daniel Daniel</h2>
              <p><b>Aula Estudio BOSS</b></p>
            </div>
          </div>
        </div>

      </div>


      <div className="h-120 bg-white content-center m-30">

        <h1 className="text-blue-500 text-5xl text-center"><b>FAQ</b></h1>

        <div className="flex justify-center mt-15">
          <div tabIndex={0} className="w-300 collapse collapse-arrow bg-blue-500 hover:scale-105">
            <div className="collapse-title font-semibold">¿Merezco una subidita final?</div>
            <div className="collapse-content text-sm">
              En verdad un poquillo sí va
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div tabIndex={0} className="w-300 collapse collapse-arrow bg-blue-500 hover:scale-105">
            <div className="collapse-title font-semibold">¿Es necesario tener el título de Bachillerato para acceder a un Ciclo Superior?</div>
            <div className="collapse-content text-sm">
              No necesariamente. Puedes acceder a un Ciclo Formativo de Grado Superior (CFGS) con alguna de estas opciones:

              <li>Título de Bachillerato.</li>

              <li>Título de Técnico (Grado Medio).</li>

              <li>Prueba de acceso para mayores de 19 años.</li>

              <li>Prueba de acceso a la universidad para mayores de 25.</li>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div tabIndex={0} className="w-300 collapse collapse-arrow bg-blue-500 hover:scale-105">
            <div className="collapse-title font-semibold">¿Qué biblioteca he utilizado?</div>
            <div className="collapse-content text-sm">
              daisyUI
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div tabIndex={0} className="w-300 collapse collapse-arrow  bg-blue-500 hover:scale-105 ">
            <div className="collapse-title font-semibold">¿Hay becas o ayudas para estudiantes en AulaStudio?</div>
            <div className="collapse-content text-sm">
              Sí, disponemos de becas propias y ayudamos a gestionar becas oficiales (como las del Ministerio de Educación). También ofrecemos planes de pago flexibles y descuentos por matrícula anticipada o familia numerosa.
            </div>
          </div>
        </div>

      </div>

      <div className="h-20 mt-30 flex justify-center">
          <h1 className="text-5xl text-blue-500 text-center"><b>TESTIMONIOS</b></h1>
      </div>

      <div className="flex justify-center mb-20">
        <div className="carousel w-400">

          <div id="slide1" className="carousel-item relative w-full flex justify-center">
            
            <div className="flex justify-evenly gap-5">
              <div className="m-5">
                <img className="juanCuesta mb-3"></img>
                <p className="text-black text-center">Jacinto Veléz</p>
              </div>
              <div className="text-black m-5 content-center w-250">
                <h3>Muy satisfecho</h3>
                <p>Estoy muy satisfecho con el curso de DAM 
                  (Desarrollo de Aplicaciones Multiplataforma). 
                  Aprendí a programar en Java, Android, SQL y más, 
                  con profesores expertos y prácticas útiles. 
                  Los proyectos me prepararon para el mundo laboral, 
                  y ahora tengo habilidades demandadas. 
                  La organización fue buena, aunque a veces faltaron 
                  recursos técnicos. Lo recomiendo a quienes les 
                  guste la programación y busquen una formación completa. 
                  Gracias a DAM, conseguí un trabajo estable como desarrollador. 
                  ¡Valió totalmente la pena!</p>
              </div>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex justify-end">
              <a href="#slide2" className="btn btn-warning text-white hover:bg-white hover:text-orange-500">❯</a>
            </div>

          </div>


          <div id="slide2" className="carousel-item relative w-full flex justify-center">

            <div className="flex justify-evenly gap-5">
              <div className="text-black m-5 content-center w-250">
                <h3>Rompí 4 ventanas</h3>
                <p>Un acueducto es una obra de ingeniería diseñada para 
                  transportar agua desde un lugar de origen hasta un 
                  punto de distribución, generalmente para abastecer 
                  ciudades o regadíos. Estas estructuras pueden ser 
                  subterráneas, superficiales o elevadas, utilizando 
                  tuberías, canales o arcos de piedra. Los acueductos
                  han sido fundamentales en el desarrollo de civilizaciones,
                    como los romanos, quienes construyeron impresionantes
                    sistemas que aún perduran. Su función es garantizar
                      el suministro constante de agua, superando 
                      obstáculos geográficos. Hoy, los acueductos 
                      modernos emplean tecnología avanzada, pero el 
                      principio sigue siendo el mismo: llevar agua 
                      de manera eficiente a donde se necesita.</p>
              </div>
              <div className="m-5">
                <img className="robertoANHQV mb-3"></img>
                <p className="text-black text-center">Luciano Núñez</p>
              </div>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex justify-between">
              <a href="#slide1" className="btn btn-warning text-white hover:bg-white hover:text-orange-500">❮</a>
              <a href="#slide3" className="btn btn-warning text-white hover:bg-white hover:text-orange-500">❯</a>
            </div>
          </div>


          <div id="slide3" className="carousel-item relative w-full flex justify-center">
            
            <div className="flex justify-evenly gap-5">
              <div className="m-5">
                <img className="emilio mb-3"></img>
                <p className="text-black text-center">Eusebio Domínguez</p>
              </div>
              <div className="text-black m-5 content-center">
                <h3>Estoy encerrado</h3>
                <p>Llevo desde que empezó el curso escolar encerrado en el baño.
                  Escribo por aquí por desesperación; ya casi no me queda papel 
                  higiénico para comer, AYUDA
                </p>
              </div>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex">
              <a href="#slide2" className="btn btn-warning text-white hover:bg-white hover:text-orange-500">❮</a>
            </div>

          </div>
        
        </div>
      </div>


      <footer className="footer sm:footer-horizontal footer-center bg-blue-500 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>

    </div>
    
  );
}
