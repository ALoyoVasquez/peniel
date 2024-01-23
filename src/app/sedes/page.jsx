"use client";
import React, { useState, useEffect } from "react";
import SedesCard from "./cardSede";
import QuienesSomos from "../somos/page";
import GenerosidadesPage from "../generosidades/page";
import { GET_ALL_SEDES } from "@/app/server/index.js";

function SedesPage() {
  const [data, setData] = useState([]);

  //Cargar Toda la Agenda
  useEffect(() => {
    fetch(GET_ALL_SEDES)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  let sedes = data;
  return (
    <>
      <QuienesSomos />
      <main className="flex min-h-screen flex-col items-center justify-between p-2 sm:p-24 ">
        <h1 className="font-montserrat text-2xl font-extrabold m-4 mb-8 ">
          Horarios y Ubicaciones
        </h1>

        <div className="font-montserrat grid grid-cols-1 w-4/5 px-10 sm:p-2 justify-center content-center sm:w-5/6 sm:grid-cols-4">
          {sedes.map((sede) => (
            <SedesCard
              key={sede.id}
              nombre={sede.name}
              pastores={sede.pastores}
              direccion={sede.address}
              avatar={sede.imagen}
              email={sede.email}
              horario={sede.horario}
            />
          ))}
        </div>
      </main>
      <GenerosidadesPage />
    </>
  );
}

export default SedesPage;
