import Link from "next/link";

export default function Home() {
  return (
    <>
      <main
        className="font-montserrat flex min-h-screen flex-col items-center justify-between absolute inset-0 m-0 rounded-none bg-cover sm:bg-cover bg-center"
        style={{
          backgroundImage: `url(${"./Principal_Temporada2024.jpg"})`,
        }}
      >
        <div className="container text-white flex justify-between font-extrabold text-xs p-2 sm:p-8">
          <Link
            href="/servidores"
            className="bg-gray-700 bg-opacity-50 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2"
          >
            ¿QUIERES SERVIR?
          </Link>
          <Link
            href="/sedes"
            className="bg-gray-700 bg-opacity-50 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2"
          >
            SEDES
          </Link>
        </div>

        <section className="font-extrabold w-full  bg-white text-black  text-xs grid sm:flex justify-center sm:justify-center items-center h-20 sm:text-sm ">
          <Link
            href="/series"
            className="bg-[#E6E6E6] h-9 hover:bg-[#a9a9a9] bg-opacity-50 rounded-md px-3 py-2 w-40 sm:w-auto m-3 flex justify-center items-center"
          >
            SERIES
          </Link>

          <Link
            href="/fundamental"
            className="bg-[#E6E6E6] h-9 hover:bg-[#a9a9a9] bg-opacity-50  rounded-md px-3 py-2 w-40 sm:w-auto m-3 flex justify-center items-center"
          >
            FUNDAMENTAL
          </Link>
          <Link
            href="/eventos"
            className="bg-[#E6E6E6] h-9 hover:bg-[#a9a9a9] bg-opacity-50 rounded-md px-3 py-2 w-40 sm:w-auto m-3 flex justify-center items-center"
          >
            EVENTOS
          </Link>
          <Link
            href="/next"
            className="bg-[#E6E6E6] h-9 hover:bg-[#a9a9a9] bg-opacity-50 rounded-md px-3 py-2 w-40 sm:w-auto m-3 flex justify-center items-center"
          >
            COMIENZA AQUI
          </Link>
        </section>
      </main>
    </>
  );
}
