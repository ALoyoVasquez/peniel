import Link from "next/link";

const NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 font">
      <section className="container flex justify-between">
        <Link href="/">Inicio</Link>
        <Link href="/sedes">Sedes</Link>
      </section>

      <h1 className="container flex justify-center items-start font-bold p-3 text-5xl">
        Bienvenido a Casa
      </h1>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
        <div className="container flex flex-col w-80 border-4 rounded-lg py-4 p-4 gap-6 m-4 ">
          <h2 className="font-bold text-lg">¿Vienes por primera Vez?</h2>
          <p className="text-sm">
            Si es tu primera vez en la iglesia y deseas seguir en contacto, por
            favor llena este pequeño formulario.
          </p>
          <div>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Deja tus datos
            </button>
          </div>
        </div>
        <div className="container flex flex-col w-80 border-4 rounded-lg py-4 p-4 gap-6 m-4 ">
          <h2 className="font-bold text-lg">¿Deseas dar el siguiente paso?</h2>
          <p className="text-sm">
            Si deseas conocer más de Dios y de la iglesia te invitamos a ser
            parte de un proceso VIDA EN PLENITUD, es un proceso de 9 semanas que
            cambiarán tu vida..
          </p>
          <div>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Ingresa Aquí
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextPage;
