"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import CardEvent from "./cardEventos/CardEvent";
import Agenda from "./cardEventos/Agenda";
import { data } from "./agenda.json";

const EventosPage = () => {
  /* const { id, fecha, descripcion, lugar } = data; */
  const event1 = "./24hsdeadoracionx2.png";
  const event2 = "./FiestaGenerosidades.png";

  //? Paginado
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const pageCount = Math.ceil(data.length / itemsPerPage); //? Calcula la cantidad de paginas de acuerdo al numero de paises
  let startIndex = currentPage * itemsPerPage;
  let eventSelect = data.slice(startIndex, startIndex + itemsPerPage);

  const handleMoveLeft = (evt) => {
    setCurrentPage(currentPage - 1);
    startIndex = currentPage * itemsPerPage;
    eventSelect = data.slice(startIndex, startIndex - itemsPerPage);

    return eventSelect;
  };

  const handleMoveRight = (evt) => {
    setCurrentPage(currentPage + 1);
    startIndex = currentPage * itemsPerPage;
    eventSelect = data.slice(startIndex, startIndex + itemsPerPage);

    return eventSelect;
  };

  const handleMoveGo = (event) => {
    let n = parseInt(event.target.value);
    setCurrentPage(n);
    startIndex = currentPage * itemsPerPage;
    eventSelect = data.slice(startIndex, startIndex + itemsPerPage);
    return eventSelect;
  };
  //?Fin Paginado

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
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
        </div>
        {/* <div>
          
            <img src={event1} alt={event1} />
          
            <img src={event2} alt={event2} />
        </div> */}

        <CardEvent event1={event1} event2={event2} />
        <h1 className=" font-montserrat font-bold text-4xl  mt-20 mb-4">
          Agenda 2024
        </h1>

        {eventSelect.map((dia) => (
          <>
            {new Date(dia.fecha) > new Date() ? (
              <Agenda
                key={dia.id}
                fecha={dia.fecha}
                descripcion={dia.descripcion}
                lugar={dia.lugar}
              />
            ) : (
              null
            )}
          </>
        ))}
        {/* //? Paginado */}
        <div className="flex justify-evenly w-1/2 font-semibold">
          <h2>
            {currentPage > 0 ? (
              <button
                onClick={handleMoveGo}
                value={0}
                id="uno"
                name="uno"
                className="font-semibold text-sm border-2 w-12 h-8 rounded-md hover:bg-black hover:text-white disabled:bg-blue-gray-400 disabled:text-blue-gray-200"
              >
                Inicio
              </button>
            ) : (
              <button
                onClick={handleMoveGo}
                value={0}
                id="uno"
                name="uno"
                disabled
                className="text-sm border-2 w-12 h-8 rounded-md hover:bg-black hover:text-white disabled:bg-blue-gray-400 disabled:text-blue-gray-200"
              >
                Inicio
              </button>
            )}
            {currentPage > 0 ? (
              <button
                onClick={handleMoveLeft}
                id="prev"
                name="pre"
                className="text-sm border-2 w-10 h-8 rounded-md hover:bg-black hover:text-white disabled:bg-blue-gray-400 disabled:text-blue-gray-200"
              >
                {" <"}
              </button>
            ) : (
              <button
                onClick={handleMoveLeft}
                id="prev"
                name="pre"
                disabled
                className="text-sm border-2 w-10 h-8 rounded-md hover:bg-black hover:text-white disabled:bg-blue-gray-400 disabled:text-blue-gray-200"
              >
                {" <"}{" "}
              </button>
            )}
            {"  "} {currentPage + 1} {"  "}
            {currentPage < pageCount - 1 ? (
              <button
                onClick={handleMoveRight}
                id="next"
                name="next"
                className="text-sm border-2 w-10 h-8 rounded-md hover:bg-black hover:text-white"
              >
                {"> "}
              </button>
            ) : (
              <button
                onClick={handleMoveRight}
                id="next"
                name="next"
                disabled
                className="text-sm border-2 w-10 h-8 rounded-md hover:bg-black hover:text-white disabled:bg-blue-gray-400 disabled:text-blue-gray-200"
              >
                {"> "}
              </button>
            )}
            {currentPage < pageCount - 1 ? (
              <button
                onClick={handleMoveGo}
                value={pageCount - 1}
                id="ultima"
                name="ultima"
                className="text-sm border-2 w-12 h-8 rounded-md hover:bg-black hover:text-white disabled:bg-blue-gray-400 disabled:text-blue-gray-200"
              >
                Fin
              </button>
            ) : (
              <button
                onClick={handleMoveGo}
                value={pageCount - 1}
                id="ultima"
                name="ultima"
                disabled
                className="text-sm border-2 w-12 h-8 rounded-md hover:bg-black hover:text-white disabled:bg-blue-gray-400 disabled:text-blue-gray-200"
              >
                Fin
              </button>
            )}
          </h2>
        </div>
        {/* //? End-Paginado */}
      </main>
    </>
  );
};

export default EventosPage;
