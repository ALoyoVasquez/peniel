"use client";
import React from "react";
import Link from "next/link";
import Login from "@/app/Login/login";
import AreasCard from "./areas/AreasCard";
import FormVoluntario from "@/app/servidores/FormVoluntario";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

//...luego más abajo

// import imagen from "@/img/logo.png";

const areasServicio = [
  {
    id: 1,
    sede: "Independencia",
    titulo: "Mvto Kids",
    encargado: "Ana Loyo",
    locacion: "Locacion",
    tiempo: "2H SEMANAL",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et perferendis eaque, percitationem praesentium nihil.",
    horario: "DOM 8-10AM - MIE 4-5PM",
    avatar: "mvtok.jpg",
  },
  {
    id: 2,
    sede: "Marroquina",
    titulo: "Mvto Teens",
    encargado: "Ana Loyo",
    locacion: "Locacion",
    tiempo: "1H SEMANAL",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et perferendis eaque, percitationem praesentium nihil.",
    horario: "DOM 8-10AM",
    avatar: "mvtot.jpg",
  },
/*   {
    id: 3,
    sede: "Guama",
    titulo: "Mvto Plus",
    encargado: "Ana Loyo",
    locacion: "Locacion",
    tiempo: "2H SEMANAL",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et perferendis eaque, percitationem praesentium nihil.",
    horario: "DOM 8-10AM",
    avatar: "mvto+.jpg",
  }, */
  {
    id: 4,
    sede: "Cocorote",
    titulo: "Protocolo",
    encargado: "Ana Loyo",
    locacion: "Locacion",
    tiempo: "1H SEMANAL",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et perferendis eaque, percitationem praesentium nihil.",
    horario: "DOM 8-10AM",
    avatar: "mvtok.jpg",
  },
  {
    id: 5,
    sede: "Ciudadela",
    titulo: "Seguridad",
    encargado: "Ana Loyo",
    locacion: "Locacion",
    tiempo: "2H SEMANAL",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et perferendis eaque, percitationem praesentium nihil.",
    horario: "DOM 8-10AM - MIE 4-5PM",
    avatar: "mvtot.jpg",
  },
  {
    id: 6,
    sede: "Camunare",
    titulo: "Salmistas",
    encargado: "Ana Loyo",
    locacion: "Locacion",
    tiempo: "1H SEMANAL",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et perferendis eaque, percitationem praesentium nihil.",
    horario: "DOM 8-10AM",
    avatar: "mvto+.jpg",
  },
  {
    id: 7,
    sede: "San Felipe Sur",
    titulo: "Multimedia",
    encargado: "Ana Loyo",
    locacion: "Locacion",
    tiempo: "1H SEMANAL",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et perferendis eaque, percitationem praesentium nihil.",
    horario: "DOM 8-10AM",
    avatar:
      "https://t3.ftcdn.net/jpg/03/20/86/12/360_F_320861294_RVQAMjfMpAORnsj0fvJJ6iT8VRkrX5Fp.jpg",
  },
];

function ServirPage() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-2 sm:p-8 font-bold bg-[#098EF4] font-montserrat">
      <section className="container flex justify-between font-medium text-white">
        <Link href="/" className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
          INICIO
        </Link>
        <Link href="/sedes" className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
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
          {/*   <center>
              <button className="flex justify-center items-center font-bold bg-dark-text rounded w-28 sm:w-40 h-10 text-white hover:opacity-75">
                <FaArrowRightLong />
              </button>
            </center> */}
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
          {/* <DialogHeader>
            <Typography  color="blue-gray" className="text-lg sm:text-2xl"> 
              Datos Bancarios
            </Typography>
          </DialogHeader> */}

         {/*  <DialogBody divider className="grid place-items-center gap-4"> */}
             <FormVoluntario />
          {/* </DialogBody> */}
          <DialogFooter className="space-x-2">
            {/*  <Button variant="text" color="blue-gray" onClick={handleOpen}>
              Cerrar
            </Button> */}
            <Button variant="gradient" onClick={handleOpen}  className="bg-light-text hover:bg-gray-100 text-white font-semibold m-2 py-2 px-4 border border-light-bg rounded shadow"
        >
              Cancelar
            </Button>
          </DialogFooter>
        </Dialog>
      </>
      {/*  <FormVoluntario /> */}

      <h2 className="container text-white flex justify-start items-start font-bold p-3">
        Áreas de Servicio
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {areasServicio.map((area) => {
          return (
            <AreasCard
              key={area.id}
              titulo={area.titulo}
              sede={area.sede}
              descripcion={area.descripcion}
              avatar={area.avatar}
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
