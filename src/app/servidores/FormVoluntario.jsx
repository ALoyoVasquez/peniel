import React from "react";

const FormVoluntario = () => {
  return (
    <div className="container flex flex-col justify-center items-center bg-white  gap-2 m-2 p-2 ">
      <h1 className="font-bold text-xl lg:text-3xl"> Peniel</h1>
      <p className="text-xs lg:text-base">
        Te felicitamos por dar este paso para ser un servidor, Completa este
        formulario para que tu solicitud sea completada.
      </p>
      <h2 className="font-bold text-sm lg:text-xl">
        Bienvenido al equipo de Servidores del COCI Peniel
      </h2>
      <div className="container w-50 sm:w-50 lg:w-80">
        <form action="submit" className="flex flex-col text-xs lg:text-base">
          <label htmlFor="name">Nombres:</label>
          <input type="text" className="border-2 rounded-md"/>
          <label htmlFor="lastname">Apellidos:</label>
          <input type="text" className="border-2 rounded-md"/>
          <label htmlFor="email">Correo Electronico:</label>
          <input type="text" className="border-2 rounded-md"/>
          <label htmlFor="email2">Confirma tu Correo Electronico:</label>
          <input type="text"className="border-2 rounded-md"/>
          <h3>Mi proximo paso</h3>
          <div className="flex flex-col justify-start items-start">
            <div>
              <input type="checkbox" name="listo" id="" />
              <label htmlFor="amReady"> Estoy listo para servir</label>
            </div>
            <div>
              <input type="checkbox" name="listo" id="" />
              <label htmlFor="amReady"> Necesito capacitacion</label>
            </div>
          </div>
          <hr />
          <div className="flex justify-center">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormVoluntario;
