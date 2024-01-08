import React from "react";
import Link from "next/link";
import EventCard from "./EventCard";
import yvCode from "../../../public/YV_QR_CODE.png";

function SeriesPage() {
  const imagen =
    "https://definicion.de/wp-content/uploads/2009/09/concierto.jpg";
  const nombre = "id-01";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container flex justify-between font-bold">
        <Link href="/servidores" className="text-sm sm:text-lg">
          Inicio
        </Link>
        <Link href="/sedes" className="text-sm sm:text-lg">
          Sedes
        </Link>
        {/*  <Link href="/login">Log In</Link> */}
      </div>
      <div className="container bg-yellow-500 ">
        <h1 className="flex justify-center text-lg font-bold sm:text-2xl">
          S E R I E S
        </h1>
        <div >
          <EventCard key={nombre} imagen={imagen} />
        </div>
        <div className="  bg-slate-500 ">
          <img src="YV_QR_CODE.png" alt="yv CODE QR" className="w-4/5" />
          <p className="text-lg">
            Ten el Bosquejo de cada Domingo a la Mano haciendo COCI Peniel tu
            iglesia en la App de YouVersion, solo debes escanear este codigo QR
            o
            <a
              href="https://www.bible.com/organizations/a703f0a6-3f3e-436c-9583-e5d840e1a3a2"
              className="font-bold"
            >
              {" "}
              hacer clic aqui
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default SeriesPage;
