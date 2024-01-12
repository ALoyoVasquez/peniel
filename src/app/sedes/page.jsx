"use client";
import SedesCard from "./cardSede";
import Link from "next/link";
import QuienesSomos from "../somos/page";
import GenerosidadesPage from "../generosidades/page";


function SedesPage() {
  const sedes = [
    {
      id: 1,
      nombre: "Independencia",
      pastores: "Rudy y Damaris de Loyo",
      direccion: "4ta Av con calles 22 y 23.",
      avatar:"./Tarjeta_Independencia.png"
    },
    {
      id: 2,
      nombre: "Camunare",
      pastores: "Josué y Mariely de Martínez",
      direccion: "4ta Av con calles 22 y 23.",
      avatar:"./Tarjeta_Camunare.png"
    },
    {
      id: 3,
      nombre: "Cocorote",
      pastores: "Kevin y Siren de Gómez",
      direccion: "4ta Av con calles 22 y 23.",
      avatar:"./Tarjeta_Cocorote.png"
    },
  ];
  const sedes2 = [
    
    {
      id: 4,
      nombre: "Ciudadela",
      pastores: "Jhonnel y Adisa de Escobar",
      direccion: "4ta Av con calles 22 y 23.",
      avatar:"./Tarjeta_Ciudadela.png"
    },
    {
      id: 5,
      nombre: "Guama",
      pastores: "Jesús y Yessica de Rojas",
      direccion: "4ta Av con calles 22 y 23.",
      avatar:"./Tarjeta_Guama.png"
    },
    {
      id: 6,
      nombre: "Marroquina",
      pastores: "Jorge y Yuli de Camacho",
      direccion: "4ta Av con calles 22 y 23.",
      avatar:"./Tarjeta_Marroquina.png"
    },
    {
      id: 7,
      nombre: "San Felipe Sur",
      pastores: "Carlos y Danelly de López",
      direccion: "4ta Av con calles 22 y 23.",
      avatar:"./Tarjeta_SanFelipe.png"
    },
  ];
  return (
    <>
        <QuienesSomos />
      <main className="flex min-h-screen flex-col items-center justify-between p-2 sm:p-24 ">
        {/*<div className="container flex justify-between font-bold">
           <Link href="/" className="text-sm sm:text-lg">
            Inicio
          </Link>
          <Link href="/sedes" className="text-sm sm:text-lg">
            Sedes
          </Link>
        </div> */}
        
        <h1 className="font-montserrat text-2xl font-extrabold m-4 mb-8 ">
          Horarios y Ubicaciones
        </h1>

        <div className="font-montserrat grid grid-cols-1 w-4/5 px-10 sm:p-2 justify-center content-center  sm:w-5/6 sm:grid-cols-3">
          {sedes.map((sede) => (
            <SedesCard
              key={sede.id}
              nombre={sede.nombre}
              pastores={sede.pastores}
              direccion={sede.direccion}
              avatar={sede.avatar}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-4/5 m-2 mb-2 p-2 font-montserrat px-10 sm:p-2 justify-center content-center  sm:w-5/6">
          
          {sedes2.map((sede) => (
            <SedesCard
              key={sede.id}
              nombre={sede.nombre}
              pastores={sede.pastores}
              direccion={sede.direccion}
              avatar={sede.avatar}
            />
          ))}
        </div>
      </main>
      <GenerosidadesPage/>
    </>
  );
}

export default SedesPage;
