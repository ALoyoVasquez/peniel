"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import CardEvent from "./cardEventos/CardEvent";
import Agenda from "./cardEventos/Agenda";
import { GET_ALL_EVENTOS, GET_ALL_EVENT_IMG } from "@/app/server/index.js";

const EventosPage = () => {
  /* const { id, fecha, descripcion, lugar } = data; */
  /*   const event1 = "./24hsdeadoracionx2.png";
  const event2 = "./FiestaGenerosidades.png"; */

  const [data, setData] = useState([]);
  const [dataImg, setDataImg] = useState([]);

  //Cargar Toda la Agenda
  useEffect(() => {
    fetch(GET_ALL_EVENTOS)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });

    fetch(GET_ALL_EVENT_IMG)
      .then((resImg) => resImg.json())
      .then((dataImg) => {
        setDataImg(dataImg);
      });
  }, []);

  let eventImgSelect = dataImg.slice(dataImg.length - 2, dataImg.length);

  //? Paginado
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const pageCount = Math.ceil(data.length / itemsPerPage); //?
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
      <main className="flex min-h-screen flex-col items-center justify-between p-2 sm:p-8 ">
        <div className="container flex justify-between font-bold">
          <Link
            href="/"
            className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            {" "}
            INICIO{" "}
          </Link>
          <Link
            href="/sedes"
            className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            {" "}
            SEDES{" "}
          </Link>
        </div>

        <div className="sm:flex grid grid-cols-1 w-full ">
          {eventImgSelect.map((img) => (
            <CardEvent key={img.id} event1={img.imagen} />
          ))}
        </div>
        {/* DIV DE AGENDA */}
        <div className="flex flex-col justify-center">
          <center>
            <h1 className=" font-montserrat font-bold text-2xl sm:text-4xl mt-20 mb-4">
              Agenda 2024
            </h1>
          </center>
          <div className="bg-white">
            {eventSelect.map((dia) => (
              <div key={dia.id}>
                {new Date(dia.dateEvent) > new Date() ? (
                  <Agenda
                    key={dia.id}
                    fecha={dia.dateEvent}
                    lugar={dia.place}
                    title={dia.title}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
        {/* //? Paginado */}
        <div className="flex justify-evenly sm:w-1/2 font-semibold w-full">
          <h2>
            {currentPage > 0 ? (
              <button
                onClick={handleMoveGo}
                value={0}
                id="uno"
                name="uno"
                className="font-semibold text-xs sm:text-sm border-2 w-12 h-8 rounded-md hover:bg-black hover:text-white disabled:bg-blue-gray-100 disabled:text-blue-gray-200"
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
                className="text-xs sm:text-sm border-2 w-12 h-8 rounded-md hover:bg-black hover:text-white disabled:bg-blue-gray-100 disabled:text-blue-gray-200"
              >
                Inicio
              </button>
            )}
            {currentPage > 0 ? (
              <button
                onClick={handleMoveLeft}
                id="prev"
                name="pre"
                className="text-xs sm:text-sm border-2 w-10 h-8 rounded-md hover:bg-black hover:text-white disabled:bg-blue-gray-100 disabled:text-blue-gray-200"
              >
                {" <"}
              </button>
            ) : (
              <button
                onClick={handleMoveLeft}
                id="prev"
                name="pre"
                disabled
                className="text-xs sm:text-sm  border-2 w-10 h-8 rounded-md hover:bg-black hover:text-white disabled:bg-blue-gray-100 disabled:text-blue-gray-200"
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
                className="text-xs sm:text-sm border-2 w-10 h-8 rounded-md hover:bg-black hover:text-white"
              >
                {"> "}
              </button>
            ) : (
              <button
                onClick={handleMoveRight}
                id="next"
                name="next"
                disabled
                className="text-xs sm:text-sm  border-2 w-10 h-8 rounded-md hover:bg-black hover:text-white disabled:bg-blue-gray-100 disabled:text-blue-gray-200"
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
                className="text-xs sm:text-sm border-2 w-12 h-8 rounded-md hover:bg-black hover:text-white disabled:bg-blue-gray-100 disabled:text-blue-gray-200"
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
                className="text-xs sm:text-sm border-2 w-12 h-8 rounded-md hover:bg-black hover:text-white disabled:bg-blue-gray-100 disabled:text-blue-gray-200"
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
