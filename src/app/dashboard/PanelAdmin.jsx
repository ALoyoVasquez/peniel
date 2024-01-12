import React from "react";

const PanelAdmin = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 bg-MidnightBlue  ">
      <div className="col-span-2 text-5xl font-bold m-4 p-4 text-white self-center">
        Panel Administrador
      </div>
      <div className="row-start-2 bg-gray-300 m-2 p-4 text-blue-gray-900">
        <h1>Cantidad de Usuarios</h1>
        <span>88</span>
      </div>
      <div className="row-start-2 bg-gray-300 m-2 p-4 text-blue-gray-900">
        <h1>Eventos pendientes</h1>
        <span>5</span>
      </div>
    </div>
  );
};

export default PanelAdmin;
