// Utilicé la librería daisyUI para botones

export default function Home() {

  const info = () =>{
    alert('No hay información todavía ');
  }

  return (
    
   <div>
      <div className="fixed top-0 navbar bg-blue-500 shadow-sm z-1">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-xl dropdown-content bg-blue-500 border-white border-2 rounded-box z-1 mt-5 w-80 p-2 h-80 shadow">
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
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>

      <div className="pt-10">

        <div className="titulo"></div>

        <h1 className="text-5xl text-center mt-15">
          <p>Domina DAM y DAW con Ciclos Superiores y Másteres</p>
          <p className="mt-3">100% Orientados al Empleo</p>
        </h1>

        <h2 className="text-3xl text-center mt-15">
          <p>Titulación oficial + prácticas en empresas tech + profesores expertos</p>
          <p className="text-4xl mt-3">¡Conviértete en desarrollador y empieza a trabajar antes de terminar!</p>
        </h2>



        <div className="flex gap-5 justify-center mt-20">
          <button onClick={info} className="bg-blue-100 rounded-md w-60 h-20 text-xl text-blue-500 border-blue-500 border-2 hover:bg-white hover:text-blue-500 hover:scale-110">Solicitar información</button>
          <button className="bg-blue-500 rounded-md w-60 h-20 text-xl skeleton hover:bg-blue-700 hover:scale-110">Preinscripción 25/26</button>
        </div>
      </div>

      <div class="xunta"></div>

      <div className="h-100 pt-10 text-center bg-white text-blue-500">

        <div className="text-3xl mb-10">
          <p>LOS MEJORES PROGRAMADORES SE FORMARON EN EL CENTRO</p>
        </div>

        <div className="flex gap-5 justify-evenly">
          <img className="imgChiqui"></img>
          <img className="imgLinus"></img>
          <img className="imgRecio"></img>
          <img className="imgEvil"></img>
          <img className="imgGabe"></img>
        </div>
      

      </div>

      <div className="flex justify-evenly h-130 items-center">

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

      <div id="contacta" className="content-center h-200 bg-white text-center">

        <p className="text-blue-500 text-5xl"><b>CONTACTA</b></p>
        
        <select className="bg-white w-250 m-5 border-blue text-orange-400 select select-info">
          <option disabled={true}>MOTIVO</option>
          <option>Consulta sobre ciclo medio</option>
          <option>Consulta sobre ciclo superior</option>
          <option>Consulta sobre ciclo máster</option>
          <option>Otra consulta</option>
        </select>
        <p></p>
        <input id="inputNombre" placeholder="NOMBRE" className="text-left p-5 text-orange-400 text-l border-1 border-blue-300 rounded-md w-250"></input>
        <input id="inputEmail" placeholder="EMAIL" className="text-left p-5 text-orange-400 text-l border-1 border-blue-300 rounded-md w-250 mt-5"></input>
        <input id="inputTelefono" placeholder="TELÉFONO" className="text-left p-5 text-orange-400 text-l border-1 border-blue-300 rounded-md w-250 mt-5"></input>
        <input id="inputMensaje" placeholder="MENSAJE" className="text-left p-5 text-orange-400 text-l border-1 border-blue-300 rounded-md w-250 h-40 mt-5"></input>

        <p></p>
        <button type="button" class="btn text-base-content btn-warning mt-5 hover:bg-white hover:text-warning">ENVIAR</button>
      </div>

      <div className="h-140 content-center text-center bg-[url('../pages/images/fondo.jpg')]">

        <h1 className="text-5xl mb-8">PROFESORADO</h1>

        <div className="flex justify-evenly text-black">
          <div className="card bg-orange-300 w-80 shadow-sm pt-5">
            <figure>
              <img className="imgEvil"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Ruberto Astro</h2>
              <p>Profesor de <b>Marcas</b>, <b>Entornos</b> y <b>Sistemas</b>.</p>
              <p>A Santi le va a subir la nota por esto</p>
              <div className="card-actions justify-center">

              </div>
            </div>
          </div>

          <div className="card bg-orange-300 w-80 shadow-sm pt-5">
            <figure>
              <img className="imgEvil"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Arturo Vázquez</h2>
              <p>Profesor de <b>Programación</b></p>
            </div>
          </div>

          <div className="card bg-orange-300 w-80 shadow-sm pt-5">
            <figure>
              <img className="imgEvil"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Tessa Garrido</h2>
              <p>Profesora de <b>Base de datos</b></p>
            </div>
          </div>

          <div className="card bg-orange-300 w-80 shadow-sm pt-5">
            <figure>
              <img className="imgEvil"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Daniel Daniel</h2>
              <p><b>Aula Estudio BOSS</b></p>
            </div>
          </div>
        </div>

      </div>


      <div className="h-120 bg-white content-center">

        <h1 className="text-blue-500 text-5xl text-center"><b>FAQ</b></h1>

        <div className="flex justify-center mt-5">
          <div tabIndex={0} className="w-300 collapse collapse-arrow bg-blue-500">
            <div className="collapse-title font-semibold">¿Merezco una subidita final?</div>
            <div className="collapse-content text-sm">
              En verdad un poquillo sí va
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <div tabIndex={0} className="w-300 collapse collapse-arrow bg-blue-500">
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

        <div className="flex justify-center mt-5">
          <div tabIndex={0} className="w-300 collapse collapse-arrow bg-blue-500">
            <div className="collapse-title font-semibold">¿Las clases en AulaStudio son presenciales, online o mixtas?</div>
            <div className="collapse-content text-sm">
              Ofrecemos modalidad presencial, online (en tiempo real) y semipresencial, dependiendo del ciclo o máster. Además, contamos con un campus virtual con materiales interactivos y tutorías personalizadas.
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <div tabIndex={0} className="w-300 collapse collapse-arrow  bg-blue-500">
            <div className="collapse-title font-semibold">¿Hay becas o ayudas para estudiantes en AulaStudio?</div>
            <div className="collapse-content text-sm">
              Sí, disponemos de becas propias y ayudamos a gestionar becas oficiales (como las del Ministerio de Educación). También ofrecemos planes de pago flexibles y descuentos por matrícula anticipada o familia numerosa.
            </div>
          </div>
        </div>

      </div>

      <div className="h-100">

      </div>

    </div>
    
  );
}
