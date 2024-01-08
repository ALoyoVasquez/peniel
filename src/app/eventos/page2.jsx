import Link from "next/link";
// import { Carousel } from "@material-tailwind/react";
import CardEventos from "@/app/eventos/cardEventos/CardEventos";


const eventos = [
  {
    id: 1,
    title: "Evento 1",
    description: "Descripcion del evento 1",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    date: "2020-01-01 10:00:00",
  },
  {
    id: 2,
    title: "Evento 2",
    description: "Descripcion del evento 2",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    date: "2020-01-01 10:00:00",
  },
  {
    id: 3,
    title: "Evento 3",
    description: "Descripcion del evento 3",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    date: "2020-01-01 10:00:00",
  },
];

function EventosPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 font">
      <h1>EVENTOS </h1>
      {/* <section className="container flex justify-between font-bold">
        <Link href="/">Inicio</Link>
        <Link href="/sedes">Sedes</Link>
      </section>
      <div className="flex flex-col items-start">
        <h1 className="container flex justify-center font-bold p-3 text-5xl">
          Proximamente
        </h1>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
          {eventos.map((eve) => {
            return <CardEventos
              key={eve.id}
              id={eve.id}
              title={eve.title}
              description={eve.description}
              image={eve.image}
              date={eve.date}
            />;
          })}
        </div>
        
          
      </div> */}
    </div>
  );
}

export default EventosPage;
