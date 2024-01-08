import Link from "next/link";
import Login from "@/app/Login/login";
import AreasCard from "./areas/AreasCard";
import FormVoluntario from '@/app/servidores/FormVoluntario'

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
    avatar:'mvtok.jpg'
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
    avatar:'mvtot.jpg'
  },
  {
    id: 3,
    sede: "Guama",
    titulo: "Mvto Plus",
    encargado: "Ana Loyo",
    locacion: "Locacion",
    tiempo: "2H SEMANAL",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et perferendis eaque, percitationem praesentium nihil.",
    horario: "DOM 8-10AM",
    avatar:'mvto+.jpg'
  },
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
    avatar:'mvtok.jpg'
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
    avatar:'mvtot.jpg'
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
    avatar:'mvto+.jpg'
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
    avatar:'https://t3.ftcdn.net/jpg/03/20/86/12/360_F_320861294_RVQAMjfMpAORnsj0fvJJ6iT8VRkrX5Fp.jpg'
  },
];

function ServirPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 font-bold">
      <section className="container flex justify-between">
        <Link href="/">Inicio</Link>
        <Link href="/sedes">Sedes</Link>
      </section>

      <FormVoluntario />

      <h2 className="container flex justify-start items-start font-bold p-3">Áreas de Servicio</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {areasServicio.map((area) => {
          return (
            <AreasCard key={area.id} titulo={area.titulo} sede={area.sede} descripcion={area.descripcion} avatar={area.avatar} encargado={area.encargado} tiempo={area.tiempo} horario={area.horario} />
          );
        })}
      </div>
    </div>
  );
}

export default ServirPage;
