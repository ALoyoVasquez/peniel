import React from "react";
import Link from "next/link";
import EventCard from "./EventCard";
import yvCode from "../../../public/YV_QR_CODE.png";

function SeriesPage() {
  const serie = "./SiguienteNivel1x1.png";
  const youVersion = "./Youversion.png";
  const imagen =
    "https://definicion.de/wp-content/uploads/2009/09/concierto.jpg";
  const nombre = "id-01";

  return (
    <main className="font-montserrat flex min-h-screen flex-col items-center justify-between p-2 sm:p-8 bg-[#16354D] text-light-text">
      <div className="container flex justify-between font-extrabold">
        <Link
          href="/"
          className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        >
          INICIO
        </Link>
        <Link
          href="/sedes"
          className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        >
          SEDES
        </Link>
        {/*  <Link href="/login">Log In</Link> */}
      </div>

      {/*  <h1 className="flex justify-center text-lg font-bold sm:text-2xl">
          S E R I E S
        </h1> */}
      <div className="sm:flex sm:justify-center sm:items-center  grid grid-cols-1">
        <div className="m-2 sm:m-10 sm:w-3/5">
          <img src={serie} alt={serie} />
        </div>
        <div className="flex-col justify-around items-center m-2 sm:m-4 sm:w-2/5 ">
          <h1 className="text-2xl sm:text-3xl font-extrabold m-4">Siguiente Nivel</h1>
          <p className="text-md leading-8 m-2 sm:m-4">
            Sumérgete en una serie de entrenamientos diseñados para impulsar el
            crecimiento del cuerpo de Cristo.
            <br />
            Durante los meses de Enero a Marzo, te invitamos a embarcarte en un
            emocionante viaje.
            <br />
            Descubre enseñanzas profundas, inspiradoras y prácticas que te
            ayudarán a llevar tu fe al siguiente nivel.
          </p>
          <img src={youVersion} alt={youVersion} />
          <center>
            <Link href="https://www.bible.com/organizations/a703f0a6-3f3e-436c-9583-e5d840e1a3a2">
              <button className=" justify-center font-bold bg-dark-text rounded w-60 h-10 text-white hover:opacity-75">
                Haz clic Aqui
              </button>
            </Link>
          </center>
        </div>
      </div>
    </main>
  );
}

export default SeriesPage;
