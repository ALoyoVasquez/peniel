import React from "react";
import Link from "next/link";
import SedesPage from "../sedes/page";

const QuienesSomos = () => {
  return (
    <>
      <main className="font-montserrat flex min-h-screen flex-col items-center justify-between p-2 sm:p-8 bg-dark-text text-light-text">
        <div className="container flex justify-between font-bold">
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
        </div>
        <div className="container grid grid-cols-1 sm:flex font-montserrat ">
          <div className="grid grid-cols-1 sm:flex text-5xl sm:text-7xl font-extrabold m-1 sm:m-2  p-6 sm:px-8 justify-center items-center w-full sm:w-1/3">
            ¿Quiénes Somos?
          </div>
          <div className="w-full sm:w-1/3 flex  justify-center items-between text-md m-1 sm:m-2 py-10 ">
            <div className="grid grid-cols-1">
              <h1 className="flex justify-center m-2">
                COCIPENIEL es una iglesia relevante que se expresa en
                comunidades. Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Totam omnis culpa architecto deleniti laborum minus ut,
                tenetur illo! Quibusdam quia et, dolorem labore nihil neque a
                modi iure id fuga veniam tempora perferendis consequuntur
                nostrum nisi, distinctio placeat porro cupiditate autem?
                Reiciendis alias quam harum accusamus. Vero deserunt autem
                suscipit.
              </h1>
              <h1 className="m-2 p-2">
                "Nuestro deseo es ver a la iglesia de Cristo en la vida de cada
                persona, amamos a las personas y su iglesia"
                <p className="flex justify-end italic ">
                  -Apóstol Israel Loyo.
                </p>
              </h1>
              <div className="flex justify-center items-end mt-40 hover:font-extrabold">
                <Link href="/sedes"> ¿Te Gustaría Visitarnos? </Link>
              </div>
            </div>
          </div>
          <div className="m-1 p-1 w-full sm:p-2 sm:m-2 sm:w-1/3 text-sm  ">
            <img
              src="./Apostoles_foto.png"
              alt="apLoyoSalcedo"
              className="m-2 w-11/12"
            />
            <span className="flex justify-center">
              Apóstoles Israel y Roxana de Loyo
            </span>
            <img
              src="./Apostoles_foto2.png"
              alt="apRosauraLoyo"
              className="m-2 w-11/12"
            />
            <span className="flex justify-center">Apóstol Rosaura de Loyo</span>
          </div>
        </div>
      </main>
    </>
  );
};

export default QuienesSomos;
