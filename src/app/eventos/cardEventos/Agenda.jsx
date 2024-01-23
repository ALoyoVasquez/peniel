import React from "react";

const Agenda = ({title, fecha, lugar }) => {
  const fechaE = new Date(fecha);
  let mes = "";
  let diaS = "";

  switch (fechaE.getMonth() + 1) {
    case 1:
      mes = "Enero";
      break;
    case 2:
      mes = "Febrero";
      break;
    case 3:
      mes = "Marzo";
      break;
    case 4:
      mes = "Abril";
      break;
    case 5:
      mes = "Mayo";
      break;
    case 6:
      mes = "Junio";
      break;
    case 7:
      mes = "Julio";
      break;
    case 8:
      mes = "Agosto";
      break;
    case 9:
      mes = "Septiembre";
      break;
    case 10:
      mes = "Octubre";
      break;
    case 11:
      mes = "Noviembre";
      break;
    default:
      mes = "Diciembre";
      break;
  }
  switch (fechaE.getDay()) {
    case 0:
      diaS = "Domingo";
      break;
    case 1:
      diaS = "Lunes";
      break;
    case 2:
      diaS = "Martes";
      break;
    case 3:
      diaS = "Miercoles";
      break;
    case 4:
      diaS = "Jueves";
      break;
    case 5:
      diaS = "Viernes";
      break;
    default:
      diaS = "Sábado";
      break;
  }

  return (
    <div className="flex justify-evenly m-1 sm:m-2 p-1 sm:p-2 text-[10px] sm:text-base">
      <span className="w-12 sm:w-24 font-semibold flex justify-center">
        {mes}
      </span>
      <span className="w-5 font-semibold flex justify-center">
        {fechaE.getDate()}{" "}
      </span>
      <span className="w-2 sm:w-4 font-semibold">|</span>
      <span className="w-12 sm:w-24 font-semibold flex justify-center">{diaS}</span>
      <span className="w-2 sm:w-4">|</span> {/* //■ */}
      <span className="w-44 sm:w-96"> {title}</span>
      <span className="w-2 sm:w-4">|</span>
      <span className="font-semibold">{lugar} </span>
    </div>
  );
};

export default Agenda;
