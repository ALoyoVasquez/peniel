import React from "react";
import Link from "next/link";

const GenerosidadesPage = () => {
  return (
    <>
      <main className="font-montserrat flex min-h-screen flex-col items-center justify-between p-2 sm:p-8 bg-MidnightBlue text-light-text">
        <div className="container grid grid-cols-1 sm:flex-col font-montserrat w-full">
          <h1 className="flex justify-center font-montserrat text-4xl font-extrabold m-4 mb-8 p-8">
            Generosidades
          </h1>
          <div className=" grid grid-cols-1 sm:flex m-4 sm:m-8 p-4 sm:p-8">
            <div className="flex-col m-2 sm:m-8 w-5/6 sm:w-1/2">
              <h2 className="font-bold m-4">
                Generosidad es nuestro privilegio
              </h2>
              <h2 className=" m-4">
                Una iglesia no se construye por el esfuerzo de pocos, sino por
                la generosidad de muchos.
              </h2>
              <h2 className="font-bold m-4">
                Aquí te dejamos tres opciones para dar:
              </h2>
            </div>
            <div className="flex-col m-2  sm:m-4 p-2 sm:p-4 w-full sm:w-1/2 text-MidnightBlue">
              <div className="bg-[#BBC9E7] m-2 p-2 flex-col">
                <h2 className="font-bold flex justify-center">Efectivo:</h2>
                <h4 className="flex justify-center">
                  Buzón cada domingo en las sedes
                </h4>
              </div>
              <div className="bg-[#BBC9E7] m-2 p-2 ">
                <div>
                  <center>
                    <h1 className="font-bold">Transferencia o pago móvil:</h1>
                    Transferencia Bancaria. <br />
                    Banco: BBVA Provincial <br />
                    Titular: A/C COCI PENIEL <br />
                    0108 2412 5101 0008 1934
                  </center>
                </div>
                <div className="m-2">
                  <center>
                    <h4 className="font-bold">Pago Móvil Provincial</h4>
                    <h5>(0108) RIF: J-29695661-8 (0426) 1518399</h5>
                  </center>
                </div>
              </div>
              <div className="bg-[#BBC9E7] flex-col m-2 p-2">
                <center>
                  <h1 className="font-bold">Paypal:</h1>
                  <h2>cocipeniel@gmail.com</h2>
                  <h2>Descripción: Donación</h2>
                </center>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default GenerosidadesPage;
