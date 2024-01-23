"use client";
import React from "react";
import {
  Dialog,
  /*   DialogHeader,
  DialogBody,
  DialogFooter,
  Typography, */
} from "@material-tailwind/react";
import Link from "next/link";

const NextPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(!open2);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-2 sm:p-8  bg-[#098EF4] font-montserrat text-white">
      <section className="container flex justify-between font-extrabold ">
        <Link
          href="/"
          className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm"
        >
          INICIO
        </Link>
        <Link
          href="/sedes"
          className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm"
        >
          SEDES
        </Link>
      </section>
      <h1 className="flex justify-center items-start font-bold sm:p-3 p-8 text-5xl">
        Bienvenido a Casa
      </h1>
      <div className="grid-cols-1 sm:flex justify-center items-start gap-2 text-white  w-full  m-4 p-2">
        <div className="grid-cols-1 w-80 h-full rounded-lg p-2 m-8 border-2 sm:border-0">
          <h2 className="font-bold text-lg m-2">¿Vienes por primera Vez?</h2>
          <p className="text-sm m-2 mb-12">
            Si es tu primera vez en la iglesia y deseas seguir en contacto, por
            favor llena este pequeño formulario.
          </p>
          <button
            className="flex items-center justify-center font-bold bg-dark-text rounded w-60 h-10 m-2  text-white hover:opacity-75"
            onClick={handleOpen}
          >
            {" "}
            Ingresa Aquí{" "}
          </button>
        </div>
        <div className="flex flex-col w-80 rounded-lg p-2 gap-6 m-8 border-2 sm:border-0">
          <h2 className="font-bold text-lg">¿Deseas dar el siguiente paso?</h2>
          <p className="text-sm">
            Si deseas conocer más de Dios y de la iglesia te invitamos a ser
            parte de un proceso VIDA EN PLENITUD, es un proceso de 9 semanas que
            cambiarán tu vida..
          </p>
          <button
            className=" justify-center font-bold bg-dark-text rounded w-60 h-10  text-white hover:opacity-75"
            onClick={handleOpen2}
          >
            Deja tus datos
          </button>
        </div>
      </div>
      {/* <div className="flex justify-evenly m-2 w-full ">
         
        </div> */}

      <>
        <Dialog
          open={open}
          handler={handleOpen}
          className=" bg-white p-2 m-4 border-double border-4 border-secondary w-3/4 sm:w-1/2"
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc6c6Cw7goDbSeqN15tF6StIYdaJ30A9gH3XjeIFfTTkN7org/viewform?embedded=true"
            width="100%"
            height="600"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            scrolling="yes"
          >
            Cargando…
          </iframe>
        </Dialog>

        <Dialog
          open={open2}
          handler={handleOpen2}
          className=" bg-white p-2 m-4 border-double border-4 border-secondary w-3/4 sm:w-1/2"
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe443JBW49BFoyFXXF_0W2WSke_4lpD9RPLWmEZZ_O_zBR2CA/viewform?embedded=true"
            width="100%"
            height="600"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            scrolling="yes"
          >
            Cargando…
          </iframe>
        </Dialog>
      </>
    </div>
  );
};

export default NextPage;
