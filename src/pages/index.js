// Utilicé la librería daisyUI para botones

export default function Home() {
  const info = () => {
    alert("No hay información todavía ");
  };

  return (
    <div className="bg-white" class="jetbrains-mono">
      <div className="fixed navbar bg-blue-500 shadow-sm z-1">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-xl dropdown-content bg-blue-500 border-white border-1 rounded-box z-1 mt-5 w-80 p-2 h-80 shadow"
            >
              <li>
                <a>PREINSCRIPCIÓN 25/26</a>
              </li>
              <li>
                <a>
                  <u>Ciclos medios</u>
                </a>
              </li>
              <li>
                <a>
                  <u>Ciclos superiores</u>
                </a>
              </li>
              <li>
                <a>
                  <u>Másteres</u>
                </a>
              </li>
              <li>
                <a>Profesorado</a>
              </li>
              <li>
                <a>Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-warning hover:bg-white hover:text-blue-500">
            AULA VIRTUAL
          </button>
        </div>
      </div>

      <div
        id="header"
        className="pt-10 h-180 md:h-250 bg-[url('../pages/images/fondo.jpg')]"
      >
        <div className="bg-[url('../pages/images/logoAE.png')] mt-10 w-70 md:w-150 mx-auto bg-cover size-20 md:size-50"></div>

        <h2 className="text-center mt-15 text-white">
          <p className="text-3xl md:text-5xl mt-3 mb-10 ml-10 mr-10 md:ml-20 md:mr-20">
            <b>
              ¡Conviértete en desarrollador y empieza a trabajar antes de
              terminar!
            </b>
          </p>
          <p className="text-2xl md:text-4xl mt-3 mb-10 ml-10 mr-10 md:ml-50 md:mr-50">
            <b>
              Titulación oficial + prácticas en empresas tech + profesores
              expertos
            </b>
          </p>
        </h2>

        <div className="flex gap-5 justify-center mt-20">
          <button
            onClick={info}
            className="bg-blue-100 rounded-md w-30 md:w-60 h-20 text-md md:text-xl text-blue-500 border-blue-500 border-2 hover:bg-white hover:text-blue-500 hover:scale-110"
          >
            Solicitar información
          </button>
          <button className="bg-blue-500 rounded-md w-30 md:w-60 h-20 text-md md:text-xl skeleton hover:bg-blue-700 hover:scale-110">
            Preinscripción 25/26
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:flex justify-evenly w-100 md:w-300 mt-15 mx-auto h-280 md:h-130 items-center bg-blue-500 rounded-xl">
        <div class="bg-white md:w-60 w-70 text-center h-80 p-3 rounded-md mx-auto">
          <p className="text-black text-xl">Certificados Profesionales</p>
          <p className="text-black text-2xl m-10">CURSO AVANZADO DE REACT</p>
          <button class="btn btn-primary hover:bg-white hover:text-blue-800">
            SOLICITAR PLAZA
          </button>
        </div>

        <div class="bg-white md:w-60 w-70 text-center h-80 p-3 rounded-md mx-auto">
          <p className="text-black text-xl">Certificados Profesionales</p>
          <p className="text-black text-2xl m-10">CURSO AVANZADO DE VUE</p>
          <button class="btn btn-secondary hover:bg-white hover:text-rose-600">
            SOLICITAR PLAZA
          </button>
        </div>

        <div class="bg-white md:w-60 w-70 text-center h-80 p-3 rounded-md mx-auto">
          <p className="text-black text-xl">Certificados Profesionales</p>
          <p className="text-black text-2xl m-10">CURSO AVANZADO DE EXCEL</p>
          <button class="btn text-white btn-accent hover:bg-white hover:text-emerald-400">
            SOLICITAR PLAZA
          </button>
        </div>
      </div>

      <div className="h-120 md:h-100 mt-30 text-center bg-white text-blue-500">
        <div className="text-xl md:text-3xl mb-5 md:mb-10">
          <p>
            <b>LOS MEJORES PROGRAMADORES SE FORMARON EN ESTE CENTRO</b>
          </p>
        </div>

        <div className="grid grid-cols-2 md:flex gap-5 md:justify-evenly">
          <img className="imgLinus mx-auto"></img>
          <img className="imgRecio mx-auto"></img>
          <img className="imgEvil mx-auto"></img>
          <img className="imgGabe mx-auto"></img>
        </div>
      </div>

      <div
        id="contacta"
        className="w-100 md:w-210 mx-auto h-170 content-center bg-blue-500 rounded-xl"
      >
        <p className="text-white text-4xl text-center">
          <b>CONTACTO</b>
        </p>

        <select className="bg-white w-90 md:w-200 m-5 border-blue text-orange-400 select select-info">
          <option disabled={true}>MOTIVO</option>
          <option>Consulta sobre ciclo medio</option>
          <option>Consulta sobre ciclo superior</option>
          <option>Consulta sobre ciclo máster</option>
          <option>Otra consulta</option>
        </select>

        <div className="flex justify-center">
          <input
            placeholder="NOMBRE"
            className="bg-white text-left p-5 text-orange-400 text-l 
            border-1 border-blue-300 rounded-md  w-90 md:w-200"
          ></input>
        </div>

        <div className="flex justify-center">
          <input
            placeholder="EMAIL"
            className="bg-white text-left p-5 text-orange-400 text-l 
            border-1 border-blue-300 rounded-md  w-90 md:w-200 mt-5"
          ></input>
        </div>

        <div className="flex justify-center">
          <input
            placeholder="TELÉFONO"
            className="bg-white text-left p-5 text-orange-400 text-l 
            border-1 border-blue-300 rounded-md  w-90 md:w-200 mt-5"
          ></input>
        </div>

        <div className="flex justify-center">
          <input
            placeholder="MENSAJE"
            className="bg-white text-left p-5 text-orange-400 text-l 
            border-1 border-blue-300 rounded-md  w-90 md:w-200 h-40 mt-5"
          ></input>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            class="btn text-base-content btn-warning mt-5 hover:bg-white hover:text-warning"
          >
            ENVIAR
          </button>
        </div>
      </div>

      <div className="h-140 md:h-100 bg-white content-center m-30">
        <h1 className="text-blue-500 text-5xl text-center">
          <b>FAQ</b>
        </h1>

        <div className="flex justify-center mt-15">
          <div
            tabIndex={0}
            className="w-300 collapse collapse-arrow bg-blue-500 hover:scale-105"
          >
            <div className="collapse-title font-semibold">
              ¿Merezco una subidita final?
            </div>
            <div className="collapse-content text-sm">
              En verdad un poquillo sí
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div
            tabIndex={0}
            className="w-300 collapse collapse-arrow bg-blue-500 hover:scale-105"
          >
            <div className="collapse-title font-semibold">
              ¿Qué biblioteca he utilizado?
            </div>
            <div className="collapse-content text-sm">
              <b>daisyUI</b>. He fozado la documentación e implementé código
              directamente de la misma; no sin antes comprenderlo, y una vez
              asimilados conceptos, modifiqué parámetros para que se proyecte lo
              que quisiera.
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div
            tabIndex={0}
            className="w-300 collapse collapse-arrow bg-blue-500 hover:scale-105"
          >
            <div className="collapse-title font-semibold">
              ¿Qué voy a trabajar en verano para afrontar 2ºDAM con más soltura?
            </div>
            <div className="collapse-content text-sm">
              <li>
                <b>Typescript</b>: Me interesa bastante la forma de trabajar con
                él.
              </li>

              <li>
                <b>React Native</b>: Creo que va a venir muy bien para el
                proyecto final
              </li>

              <li>
                <b>Bicliotecas interesantes de Javascript</b>
              </li>

              <li>
                <b>Tailwind</b>: Lo que llevo trabajado con este framework me
                atrae mucho más que el propio CSS
              </li>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div
            tabIndex={0}
            className="w-300 collapse collapse-arrow  bg-blue-500 hover:scale-105 "
          >
            <div className="collapse-title font-semibold">Lorem ipsum</div>
            <div className="collapse-content text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>

      <div className="h-20 mt-10 flex justify-center">
        <h1 className="text-4xl md:text-5xl text-blue-500 text-center">
          <b>TESTIMONIOS</b>
        </h1>
      </div>

      <div className="flex h-100 md:h-60 justify-center mb-20">
        <div className="carousel w-400">
          <div
            id="slide1"
            className="carousel-item relative w-full flex justify-center"
          >
            <div className="grid grid-cols-1 md:flex justify-evenly gap-5 w-80 md:w-250">
              <div className="md:m-5 m-2">
                <img className="juanCuesta mb-3 mx-auto"></img>
                <p className="text-black text-center">Jacinto Veléz</p>
              </div>
              <div className="text-black m-5 content-center w-250">
                <h3>Muy satisfecho</h3>
                <p className="md:w-full w-70">
                  Estoy muy satisfecho con el curso de DAM (Desarrollo de
                  Aplicaciones Multiplataforma). Aprendí a programar en Java,
                  Android, SQL y más, con profesores expertos y prácticas
                  útiles. Los proyectos me prepararon para el mundo laboral, y
                  ahora tengo habilidades demandadas. La organización fue buena,
                  aunque a veces faltaron recursos técnicos. Lo recomiendo a
                  quienes les guste la programación y busquen una formación
                  completa. Gracias a DAM, conseguí un trabajo estable como
                  desarrollador. ¡Valió totalmente la pena!
                </p>
              </div>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex justify-end">
              <a
                href="#slide2"
                className="btn btn-warning text-white hover:bg-white hover:text-orange-500"
              >
                ❯
              </a>
            </div>
          </div>

          <div
            id="slide2"
            className="carousel-item relative w-full flex justify-center"
          >
            <div className="grid grid-cols-1 md:flex justify-evenly gap-5 w-80 md:w-250">
              <div className="md:m-5 m-0 mx-auto">
                <img className="robertoANHQV mb-3"></img>
                <p className="text-black text-center">Luciano Núñez</p>
              </div>
              <div className="text-black m-5 content-center w-250">
                <h3>Rompí 4 ventanas</h3>
                <p className="md:w-full w-70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum..
                </p>
              </div>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex justify-between">
              <a
                href="#slide1"
                className="btn btn-warning text-white hover:bg-white hover:text-orange-500"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-warning text-white hover:bg-white hover:text-orange-500"
              >
                ❯
              </a>
            </div>
          </div>

          <div
            id="slide3"
            className="carousel-item relative w-full flex justify-center"
          >
            <div className="grid grid-cols-1 md:flex justify-evenly gap-5 w-80 md:w-250">
              <div className="md:m-5 m-0">
                <img className="emilio mb-3 mx-auto"></img>
                <p className="text-black text-center">Eusebio Domínguez</p>
              </div>
              <div className="text-black m-5 content-center">
                <h3>Estoy encerrado</h3>
                <p>
                  Llevo desde que empezó el curso escolar encerrado en el baño.
                  Escribo por aquí por desesperación; ya casi no me queda papel
                  higiénico para comer, AYUDA
                </p>
              </div>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex">
              <a
                href="#slide2"
                className="btn btn-warning text-white hover:bg-white hover:text-orange-500"
              >
                ❮
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer sm:footer-horizontal footer-center bg-blue-500 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
}
