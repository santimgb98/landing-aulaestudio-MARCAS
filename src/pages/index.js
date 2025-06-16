export default function Home() {
  const info = () =>{
    alert('No hay información todavía ');
  }

  const mensajeEnviado = () =>{
    alert('Mensaje enviado con éxito');
  }

  return (
   <div>
      <div className="flex mx-auto bg-blue-500 rounded-md w-450 h-20 m-5 justify-between">

        <div className="flex items-center ml-30 gap-30 text-2xl">
          <button type="button" class="eleccionMenu">Ciclos medios</button>
          <button type="button" class="eleccionMenu">Ciclos superiores</button>
          <button type="button" class="eleccionMenu">Másteres</button>
          <button type="button" class="eleccionMenu">Profesorado</button>
          <button type="button" class="eleccionMenu">Contacto</button>
        </div>

        <div className="flex">
          <button className="bg-blue-700 rounded-md mt-5 mb-5 mr-5 p-2 hover:bg-blue-800 hover:scale-110">AULA VIRTUAL</button>
        </div>

      </div>

      <div>

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
          <button className="bg-blue-500 rounded-md w-60 h-20 text-xl hover:bg-blue-700 hover:scale-110">Preinscripción 25/26</button>
        </div>
      </div>

      <div class="xunta"></div>

      <div className="h-100 pt-10 text-center bg-white text-blue-500">

        <div className="text-3xl mb-10">
          <p>0% DE CONTRATOS CON LOS MEJORES PROGRAMADORES DE LA ÉPOCA</p>
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
          <p className="text-black text-2xl m-10">CURSO AVANZADO DE EXCEL</p>
          <button type="button" className="bg-blue-500 p-5 rounded-xl hover:bg-blue-600">SOLICITAR PLAZA</button>
        </div>

        <div class="cursos">
          <p className="text-black text-xl">Certificados Profesionales</p>
          <p className="text-black text-2xl m-10">CURSO AVANZADO DE EXCEL</p>
          <button type="button" className="bg-blue-500 p-5 rounded-xl hover:bg-blue-600">SOLICITAR PLAZA</button>
        </div>

        <div class="cursos">
          <p className="text-black text-xl">Certificados Profesionales</p>
          <p className="text-black text-2xl m-10">CURSO AVANZADO DE EXCEL</p>
          <button type="button" className="bg-blue-500 p-5 rounded-xl hover:bg-blue-700">SOLICITAR PLAZA</button>
        </div>

      </div>

      <div className="content-center h-200 bg-white text-center">

        <p className="text-blue-500 text-5xl"><b>CONTACTA</b></p>
        
        <div className="flex justify-evenly m-5">
          <div className="text-left p-2 border-blue text-orange-300 text-xl border-1 border-blue-500 w-250 h-30 overflow-auto">
            <p>CICLO MEDIO</p>
            <p>CICLO SUPERIOR</p>
            <p>MÁSTER IA</p>
            <p>EMPRESAS</p>
            <p>INFORMACIÓN</p>
            <p>OTROS</p>
          </div>
        </div>
        <input id="input" pLaceholder="NOMBRE" className="text-left p-5 border-blue text-orange-300 text-l border-1 border-blue-500 w-250"></input>
        <input id="input" pLaceholder="EMAIL" className="text-left p-5 border-blue text-orange-300 text-l border-1 border-blue-500 w-250 mt-5"></input>
        <input id="input" pLaceholder="TELÉFONO" className="text-left p-5 border-blue text-orange-300 text-l border-1 border-blue-500 w-250 mt-5"></input>
        <input id="input" pLaceholder="MENSAJE" className="text-left p-5 border-blue text-orange-300 text-l border-1 border-blue-500 w-250 h-40 mt-5"></input>

        <p></p>
        <button onClick={mensajeEnviado} type="button" className="mt-10 bg-orange-400 border-blue-500 border-1 text-white p-4 rounded-xl hover:scale-110 hover:bg-blue-500">ENVIAR</button>
        

      </div>
    </div>
    
  );
}
