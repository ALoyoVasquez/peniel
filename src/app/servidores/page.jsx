"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import AreasCard from "./areas/AreasCard";
import FormVoluntario from "@/app/servidores/FormVoluntario";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  Button,
  Dialog,
  DialogFooter,
} from "@material-tailwind/react";
import { GET_ALL_VOLUNTARIADO, GET_ALL_SEDES } from "@/app/server/index.js";

function ServirPage() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [sedes, setSedes] = React.useState([]);

  useEffect(() => {
    fetch(GET_ALL_VOLUNTARIADO)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });

    fetch(GET_ALL_SEDES)
      .then((res) => res.json())
      .then((sedes) => {
        setSedes(sedes);
      });
  }, []);

  let areasServicio = data.filter((ele) => ele.status === "A");
  let miSede;

  const handleOpen = () => setOpen(!open);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-2 sm:p-8 font-bold bg-[#098EF4] font-montserrat">
      <section className="container flex justify-between font-medium text-white">
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
      </section>
      <div className="flex-1 w-full font-montserrat sm:flex ">
        <div className="justify-center items-center w-1/2">
          <h1 className="flex justify-center items-center font-montserrat font-extrabold text-5xl p-32 text-white ">
            ¿Quieres ser un Servidor?
          </h1>
        </div>
        <div className="flex-col justify-center items-center w-full sm:w-1/2 p-4 ">
          <h1 className="flex justify-center font-bold text-lg sm:text-lg m-6">
            Regístrate
          </h1>
          <div className="justify-center items-center bg-light-text m-0 sm:m-8 p-1 sm:p-8 mx-2 sm:mx-40">
            <h1 className="font-bold">Nos alegra que desees ser parte.</h1>
            <br />
            <h1 className="flex justify-center m-2">
              Llena el siguiente formulario
            </h1>

            <center>
              <Button
                onClick={handleOpen}
                className="flex justify-center items-center font-bold bg-dark-text rounded w-28 sm:w-40 h-10 text-white hover:opacity-75"
              >
                <FaArrowRightLong />
              </Button>
            </center>
          </div>
        </div>
      </div>

      <>
        <Dialog
          open={open}
          handler={handleOpen}
          className=" bg-white p-2 m-4 w-3/4 sm:w-1/2"
        >
          <FormVoluntario />

          <DialogFooter className="space-x-2">
            <Button
              variant="gradient"
              onClick={handleOpen}
              className="bg-light-text hover:bg-gray-100 text-white font-semibold m-2 py-2 px-4 border border-light-bg rounded shadow "
            >
              Cancelar
            </Button>
          </DialogFooter>
        </Dialog>
      </>

      <h2 className="container text-white flex justify-start items-start font-bold p-3">
        Áreas de Servicio
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {areasServicio.map((area) => {
          {
            miSede = sedes.find((sede) => sede.id === area.sede);
          }
          return (
            <AreasCard
              key={area.id}
              id={area.id}
              titulo={area.titulo}
              descripcion={area.descripcion}
              sede={miSede ? miSede.name : ""}
              avatar={
                area.avatar
                  ? area.avatar
                  : "https://assets-global.website-files.com/63e2e08df72ab94647f09658/64d258c0edb50519a482d4e2_camylla-battani-ABVE1cyT7hk-unsplash.jpg"
              }
              encargado={area.encargado}
              tiempo={area.tiempo}
              horario={area.horario}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ServirPage;
