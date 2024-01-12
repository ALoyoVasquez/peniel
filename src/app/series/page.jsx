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
    <main className="font-montserrat flex min-h-screen flex-col items-center justify-between p-24 bg-secondary text-light-text">
      <div className="container flex justify-between font-bold">
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
      <div className="container ">
        {/*  <h1 className="flex justify-center text-lg font-bold sm:text-2xl">
          S E R I E S
        </h1> */}
        <div className="flex justify-center items-center">
          <div className=" m-10 w-3/5">
            <img src={serie} alt={serie} />
          </div>
          <div className=" flex-col justify-center items-center bg-slate-500 m-2 w-2/5 ">
            <h1 className="text-3xl font-extrabold">Siguiente Nivel</h1>

            <p className="text-lg">
              Estamos trabajando para el siguiente Nivel
              <img src={youVersion} alt={youVersion} />
            </p>
            <center>
              <Link href="https://www.bible.com/organizations/a703f0a6-3f3e-436c-9583-e5d840e1a3a2">
                <button className=" justify-center font-bold bg-dark-text rounded w-60 h-10 text-white hover:opacity-75">
                  Haz clic Aqui
                </button>
              </Link>
            </center>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SeriesPage;
