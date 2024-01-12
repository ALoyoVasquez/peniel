import Link from "next/link";

const NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24  bg-[#098EF4] font-montserrat text-white">
      <section className="container flex justify-between">
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

      <h1 className="container flex justify-center items-start font-bold p-3 text-5xl">
        Bienvenido a Casa
      </h1>
      <div className="flex justify-evenly gap-2 md:grid-cols-2 lg:grid-cols-2 text-white  w-full">
        <div className="container flex flex-col w-80 rounded-lg py-4 p-4 gap-6 m-4 ">
          <h2 className="font-bold text-lg">¿Vienes por primera Vez?</h2>
          <p className="text-sm">
            Si es tu primera vez en la iglesia y deseas seguir en contacto, por
            favor llena este pequeño formulario.
          </p>
        </div>
        <div className="container flex flex-col w-80 rounded-lg py-4 p-4 gap-6 m-4 ">
          <h2 className="font-bold text-lg">¿Deseas dar el siguiente paso?</h2>
          <p className="text-sm">
            Si deseas conocer más de Dios y de la iglesia te invitamos a ser
            parte de un proceso VIDA EN PLENITUD, es un proceso de 9 semanas que
            cambiarán tu vida..
          </p>
        </div>
      </div>
        <div className="flex justify-evenly m-2 w-full "> 
          <button className=" justify-center font-bold bg-dark-text rounded w-60 h-10 m-2 text-white hover:opacity-75">
            Ingresa Aquí
          </button>

          <button className=" justify-center font-bold bg-dark-text rounded w-60 h-10 m-2 text-white hover:opacity-75">
            Deja tus datos
          </button>
        </div>
    </div>
  );
};

export default NextPage;
